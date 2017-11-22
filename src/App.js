import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.route.data,
      searchText:'',
      degree: 'C'
    }
    this.OnSearchText = this.OnSearchText.bind(this);
    this.CelsiusChange = this.CelsiusChange.bind(this);
    this.FarenheitChange = this.FarenheitChange.bind(this);
  }
  OnSearchText(e){
    this.setState({
      searchText:e.target.value
    });
  }
  CelsiusChange(){
    if(this.state.degree ==='F'){
      var newdata = this.state.data;
      for(var i in newdata){
        newdata[i].temp.low = ((newdata[i].temp.low - 32) / 1.8).toFixed(0);
        newdata[i].temp.high = ((newdata[i].temp.high - 32) / 1.8).toFixed(0);
      }
      this.setState({
        data:newdata,
        degree: 'C'
      });
    }
  }
  FarenheitChange(){
    if(this.state.degree ==='C'){
      var newdata = this.state.data;
      for(var i in newdata){
        newdata[i].temp.low = Math.round(newdata[i].temp.low * 1.8 + 32);
        newdata[i].temp.high = Math.round(newdata[i].temp.high * 1.8 + 32);
      }
      this.setState({
        data:newdata,
        degree: 'F'
      });
    }
  }
  render() {
    var rows = [];
    for(var i in this.state.data){
      if(this.state.searchText===''){
          rows.push( <WeatherList key={i} data={this.state.data[i]} degree={this.state.degree} /> );
      }else{
        if(this.state.data[i].city.toLowerCase().indexOf(this.state.searchText)>= 0){
          rows.push( <WeatherList key={i} data={this.state.data[i]} degree={this.state.degree} /> );
        }
      }
    }
    return (
      <div className="App">
        <SearchBar onSearch={this.OnSearchText} onCelClick={this.CelsiusChange} onFarClick={this.FarenheitChange}/>
        {rows}
      </div>
    );
  }
}

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

class WeatherList extends Component {
  render(){
    return (
      <div className="list clearfix">
        <PlaceInfo name={this.props.data.city} country={this.props.data.country} />
        <LowTemp temp={this.props.data.temp.low} degree={this.props.degree}  />
        <HighTemp temp={this.props.data.temp.high} degree={this.props.degree}/>
      </div>
      );
  }
}

class PlaceInfo extends Component {
  render(){
    return(
      <div className="col-sm-6" style={{background:'white'}}>
        <div>
          <span className="city">{this.props.name}, </span>
          <span className="country">{this.props.country}</span>
        </div>
        <div>
          <span>Today,</span> 05:12 PM
        </div>
      </div>
    );
  }
}

class LowTemp extends Component{
  render(){
    return (
      <div className="col-sm-3" style={{background:'#34495e'}}>
        <div style={{color:'white'}}>
          <Chevron color="red" klasa="glyphicon glyphicon-chevron-down" />
          <span className="degree">{this.props.temp}°</span>
          <span className="measure">{this.props.degree}</span>
          </div>
        <div className="degree-text">LOW</div>
      </div>
    );
  }
}

class HighTemp extends Component{
  render(){
    return(
      <div className="col-sm-3" style={{background:'#2c3e50'}}>
          <div style={{color:'white'}}>
            <Chevron color="lightgreen" klasa="glyphicon glyphicon-chevron-up" />
            <span className="degree">{this.props.temp}°</span>
            <span className="measure">{this.props.degree}</span>
            </div>
          <div className="degree-text">HIGH</div>
      </div>
    );
  }
}

class Chevron extends Component{
  render(){
    return(
      <i style={{color:this.props.color, fontSize:'20px'}} className={this.props.klasa}></i>
    );
  }
}

export default App;
