import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

class SearchBar extends Component {
  render(){
    return (
      <div class="row">
      <div class="col-sm-10">
        <input type="text" class="form-control" style={{marginBottom:'20px'}} placeholder="Search for a city ..." />
      </div>
      <div class="col-sm-2">
        <DegreeSwitcher />
      </div>
      </div>
    );
  }
}

class DegreeSwitcher extends Component {
  render(){
    return (
      <div class="btn-group">
          <button type="button" class="btn btn-default">°C</button>
          <button type="button" class="btn btn-default">°F</button>
      </div>
    );
  }
}

class WeatherList extends Component {
  render(){
    return (
      <div class="list" style={{background: 'white'}}>
        <div class="col-sm-6" style={{background:'white'}}>
            <div class="blue-grey-700">
                <span style={{fontSize:'30px'}}>City, </span>
                <span style={{fontSize:'24px'}}>Country</span>
              </div>
              <div>
                <span class="mr-5">Today,</span> 05:12 PM
              </div>
        </div>
        <div class="col-sm-3" style={{background:'#34495e'}}>
          <div style={{color:'white'}}>
            <i class="wb-chevron-up red-500 font-size-20 mr-5"></i>
            <span style={{fontSize:'30px'}}>8°</span>
            <span style={{fontSize:'24px'}}>C</span>
            </div>
          <div style={{fontSize:'14px'}}>LOW</div>
        </div>
        <div class="col-sm-3" style={{background:'#2c3e50'}}>
            <div style={{color:'white'}}>
              <i class="wb-chevron-up red-500 font-size-20 mr-5"></i>
              <span style={{fontSize:'30px'}}>19°</span>
              <span style={{fontSize:'24px'}}>C</span>
              </div>
            <div style={{fontSize:'14px'}}>HIGH</div>
        </div>
      </div>
      );
  }
}

export default App;
