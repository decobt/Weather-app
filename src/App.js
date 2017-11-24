import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

//main App component
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.route.data,
      searchText:'',
      degree: 'C'
    }
    //bind all events
    this.OnSearchText = this.OnSearchText.bind(this);
    this.CelsiusChange = this.CelsiusChange.bind(this);
    this.FarenheitChange = this.FarenheitChange.bind(this);
  }
  //update state when user enters text in searchbar
  OnSearchText(e){
    this.setState({
      searchText:e.target.value
    });
  }
  //fire event when user clicks on celsius button, calculate new temp values
  CelsiusChange(){
    //first check if temp are in Farenheit
    if(this.state.degree ==='F'){
      var newdata = this.state.data;
      //loop through the data
      for(var i in newdata){
        //calculate low temperature
        newdata[i].temp.low = ((newdata[i].temp.low - 32) / 1.8).toFixed(0);
        //calculate high temperature
        newdata[i].temp.high = ((newdata[i].temp.high - 32) / 1.8).toFixed(0);
      }
      //update the state with the new data
      this.setState({
        data:newdata,
        degree: 'C'
      });
    }
  }

  //fire event when user clicks on farenheit button, calculate new temp values
  FarenheitChange(){
    //first check if temp is in celsius
    if(this.state.degree ==='C'){
      var newdata = this.state.data;
      //loop through the data
      for(var i in newdata){
        //calculate new value for low temperature
        newdata[i].temp.low = Math.round(newdata[i].temp.low * 1.8 + 32);
        //calculate new value for high temperature
        newdata[i].temp.high = Math.round(newdata[i].temp.high * 1.8 + 32);
      }
      //update the state with new values
      this.setState({
        data:newdata,
        degree: 'F'
      });
    }
  }
  render() {
    var rows = [];
    //loop through each record in the data
    for(var i in this.state.data){
      //check if searchtext is not set
      if(this.state.searchText===''){
        //if it is not, push each row
        rows.push( <WeatherList key={i} data={this.state.data[i]} degree={this.state.degree} /> );
      }else{
        //if searchtext is set, compare searchText with city name
        if(this.state.data[i].city.toLowerCase().indexOf(this.state.searchText)>= 0){
          //if they match, push that record
          rows.push( <WeatherList key={i} data={this.state.data[i]} degree={this.state.degree} /> );
        }
      }
    }
    //render component
    return (
      <div className="App">
        <SearchBar onSearch={this.OnSearchText} onCelClick={this.CelsiusChange} onFarClick={this.FarenheitChange}/>
        {rows}
        <p className="footer">Weather App, Created by Trayche Roshkoski</p>
      </div>
    );
  }
}


// Searchbar component (search field plus measure conversion button)
class SearchBar extends Component {
  render(){
    return (
      <div className="row">
        <div className="col-sm-10">
          <input onChange={this.props.onSearch} type="text" className="form-control" style={{marginBottom:'20px'}} placeholder="Search for a city ..." />
        </div>
        <div className="col-sm-2">
          <DegreeSwitcher onCelClick={this.props.onCelClick} onFarClick={this.props.onFarClick}/>
        </div>
      </div>
    );
  }
}

//measure conversion buttons used to convert the degrees between C and F
class DegreeSwitcher extends Component {
  render(){
    return (
      <div className="btn-group">
          <button type="button" onClick={this.props.onCelClick} className="btn btn-default">°C</button>
          <button type="button" onClick={this.props.onFarClick} className="btn btn-default">°F</button>
      </div>
    );
  }
}

//weather list row, consists of basic info, low and high temp components
class WeatherList extends Component {
  render(){
    return (
      <Link to={'city/'+this.props.data.city} className="cityLink">
      <div className="list clearfix">
        <PlaceInfo name={this.props.data.city} country={this.props.data.country} icon={this.props.data.icon} />
        <LowTemp temp={this.props.data.temp.low} degree={this.props.degree}  />
        <HighTemp temp={this.props.data.temp.high} degree={this.props.degree}/>
      </div>
      </Link>
      );
  }
}

class PlaceInfo extends Component {
  render(){
    var t =new Date().toLocaleTimeString();
    return(
      <div>
      <div className="col-sm-2">
        <Chevron font="48px" klasa={this.props.icon+' icon'} />
      </div>
      <div className="col-sm-6" style={{background:'white', padding:'15px 0px'}}>
        <div>
          <span className="city">{this.props.name}, </span>
          <span className="country">{this.props.country}</span>
        </div>
        <div>
          <span>Today,</span> {t}
        </div>
      </div>
      </div>
    );
  }
}

//low temperature component
class LowTemp extends Component{
  render(){
    return (
      <div className="col-sm-2 lowTemp">
        <div style={{color:'white'}}>
          <Chevron color="red" font="20px" klasa="glyphicon glyphicon-chevron-down" />
          <span className="degree">{this.props.temp}°</span>
          <span className="measure">{this.props.degree}</span>
          </div>
        <div className="degree-text">LOW</div>
      </div>
    );
  }
}

//high temperature component
class HighTemp extends Component{
  render(){
    return(
      <div className="col-sm-2 highTemp">
          <div style={{color:'white'}}>
            <Chevron color="lightgreen" font="20px" klasa="glyphicon glyphicon-chevron-up" />
            <span className="degree">{this.props.temp}°</span>
            <span className="measure">{this.props.degree}</span>
            </div>
          <div className="degree-text">HIGH</div>
      </div>
    );
  }
}

//icon component
class Chevron extends Component{
  render(){
    return(
      <i style={{color:this.props.color, fontSize: this.props.font }} className={this.props.klasa}></i>
    );
  }
}

//export the App component
export default App;
