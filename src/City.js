import React, { Component } from 'react';
import { Link } from 'react-router';

import './index.css';
import axios from 'axios';

class City extends Component{
  constructor(props){
    super(props);
    //set initial state data
    this.state = {
      data : ''
    }
  }
  //run before the component is rendered
  componentWillMount(){
    var self = this;
    //get the city id from the params
    var city = this.props.params.id;
    //get data from api
    axios.get('http://api.openweathermap.org/data/2.5/forecast?id='+city+'&APPID=d25b778625fdbfd3f3c5d543c6bb4fb8&units=metric&cnt=8')
    .then(function (response) {
      //once you get the response update the state
      self.setState({
        data: response.data
      });
    })
    .catch(function (error) {
      //display error if any
      console.log(error);
    });
  }
  render(){
    var rows = [];
    var city;
    if(this.state.data !==''){
      //get forecast data and assign it to newdata
      var newdata = this.state.data.list;
      //set the city name
      city = this.state.data.city.name;
      //loop through data and create component for each forecast item
      for(var i in newdata){
        rows.push(<InfoPanel key={i} data={newdata[i]} />);
      }
    }
    return(
      <div>
      <div><h2 style={{color:'white'}}>Location: {city}</h2></div>
      <div className="row">
        <div className="col-sm-12">

        <div className="panel panel-upgrade"><div className="panel-body">
          <div className="table-responsive">
          <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Date/Time</th>
              <th>Temp (C)</th>
              <th>Pressure</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
          </div>
          </div></div>
          </div>
      </div>
      <div className="row ">
      <div className="col-sm-12">
        <Link to="/" className="btn btn-upgrade">
          <span className="glyphicon glyphicon-chevron-left"></span><strong> Go Back</strong>
        </Link>
      </div></div>
      </div>
    );
  }
}

//Infopanel component, holds individual day forecast information
class InfoPanel extends Component{
  render() {
    return (

      <tr>
        <td>
          <img alt={this.props.data.dt} src={'http://openweathermap.org/img/w/'+this.props.data.weather['0'].icon+'.png'} />
        </td>
        <td>{this.props.data.dt_txt}</td>
        <td>{this.props.data.main.temp}</td>
        <td>{this.props.data.main.pressure}</td>
        <td>{this.props.data.main.humidity}</td>
      </tr>

    );
  }
}

export default City;
