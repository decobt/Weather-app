import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import axios from 'axios';

//main App component
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: '',
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
      searchText: e.target.value
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
        newdata[i].main.temp_min = ((newdata[i].main.temp_min - 32) / 1.8).toFixed(0);
        //calculate high temperature
        newdata[i].main.temp_max = ((newdata[i].main.temp_max - 32) / 1.8).toFixed(0);
        newdata[i].main.temp = ((newdata[i].main.temp - 32) / 1.8).toFixed(0);
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
        newdata[i].main.temp_min = Math.round(newdata[i].main.temp_min * 1.8 + 32).toFixed(0);
        //calculate new value for high temperature
        newdata[i].main.temp_max = Math.round(newdata[i].main.temp_max * 1.8 + 32).toFixed(0);
        newdata[i].main.temp = Math.round(newdata[i].main.temp * 1.8 + 32).toFixed(0);
      }
      //update the state with new values
      this.setState({
        data:newdata,
        degree: 'F'
      });
    }
  }

  componentWillMount(){
      var self = this;
      axios.get('https://api.openweathermap.org/data/2.5/group?id=6058560,6942553,2673730,4219762,4505542,2950159,5107152,5601538,792680,3128760&APPID=d25b778625fdbfd3f3c5d543c6bb4fb8&units=metric')
      .then(function (response) {
        //once you get the response update the state
        self.setState({
          data: response.data.list
        });
      })
      .catch(function (error) {
        //display error if any
        console.log(error);
      });
  }

  render() {
    var rows = [];
    //loop through each record in the data
    for(var i in this.state.data){
      //check if searchtext is not set
      if(this.state.searchText===''){
        //if it is not, push each row
        rows.push( <WeatherList key={this.state.data[i].id} data={this.state.data[i]} degree={this.state.degree} /> );
      }else{
        //if searchtext is set, compare searchText with city name
        if(this.state.data[i].name.toLowerCase().indexOf(this.state.searchText)>= 0){
          //if they match, push that record
          rows.push( <WeatherList key={this.state.data[i].id} data={this.state.data[i]} degree={this.state.degree} /> );
        }
      }
    }
    //render component
    return (
      <div className="App">
        <SearchBar onSearch={this.OnSearchText} onCelClick={this.CelsiusChange} onFarClick={this.FarenheitChange}/>
        <div className="weatherPanel">
          <div className="weatherList">{rows}</div>
        </div>
        <p className="footer"><strong>Weather App, Created by Trayche Roshkoski</strong></p>
      </div>
    );
  }
}


// Searchbar component (search field plus measure conversion button)
class SearchBar extends Component {
  render(){
    return (
      <div className="row">
        <div className="col-sm-10 col-xs-7">
          <input onChange={this.props.onSearch} type="text" className="form-control searchbar" placeholder="Search for a city ..." />
        </div>
        <div className="col-sm-2 col-xs-5 text-right">
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
          <button type="button" onClick={this.props.onCelClick} className="btn btn-upgrade">°C</button>
          <button type="button" onClick={this.props.onFarClick} className="btn btn-upgrade">°F</button>
      </div>
    );
  }
}

//weather list row, consists of basic info, low and high temp components
class WeatherList extends Component {
  render(){
    return (
      <Link to={'city/'+this.props.data.id} className="cityLink">
      <div className="list text-center">
        <PlaceInfo temp={this.props.data.main.temp} degree={this.props.degree} name={this.props.data.name} date={this.props.data.dt} icon={this.props.data.weather[0].icon} />
        <div className="row previewWeather">
          <LowTemp temp={this.props.data.main.temp_min} degree={this.props.degree}  />
          <HighTemp temp={this.props.data.main.temp_max} degree={this.props.degree}/>
        </div>
        <div className="extraInfo">
          <div><span>Feels Like</span><span>{this.props.data.main.feels_like}°</span></div>
          <div><span>Pressure</span><span>{this.props.data.main.pressure}mb</span></div>
          <div><span>Humidity</span><span>{this.props.data.main.humidity}%</span></div>
        </div>
      </div>
      </Link>
      );
  }
}

class PlaceInfo extends Component {
  render(){
    var t = new Date(this.props.date * 1000).toLocaleString();
    return(
      <div>
        <div>
          <span className="city">{this.props.name} </span>
          <div>{t}</div>
        </div>
        <div className="col-sm-12">
          <img alt={this.props.name} src={'http://openweathermap.org/img/wn/'+this.props.icon+'@4x.png'} style={{padding:'20px'}} />
        </div>
        <div className="mainTemp">
          <span className="degree">{this.props.temp}°</span>
        </div>
      </div>
    );
  }
}

//low temperature component
class LowTemp extends Component{
  render(){
    return (
      <div className="col-xs-6 col-sm-6 lowTemp">
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
      <div className="col-xs-6 col-sm-6 highTemp">
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
