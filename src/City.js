import React, { Component } from 'react';
import { Link } from 'react-router';

import './index.css';

class City extends Component{
  render(){
    console.log(this.props.params.name);
    return(
      <div>
      <div><h2 style={{color:'white'}}>Location: {this.props.params.name}</h2></div>
      <div class="row">
        <InfoPanel />
        <InfoPanel />
        <InfoPanel />
      </div>
      <div class="row ">
      <div class="col-sm-12">
        <Link to="/" className="btn btn-default btn-lg">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        </Link>
      </div></div>
      </div>
    );
  }
}

class InfoPanel extends Component{
  render() {
    return (
      <div class="col-sm-4">
        <div class="panel price panel-red">
          <div class="panel-heading  text-center" style={{background:'#f5f5f5'}}>
            <h3 style={{fontSize:'36px'}}><i class="wi wi-thermometer"></i> 32°C</h3>
          </div>
          <div class="panel-body text-center" >

            <i style={{color:'red', fontSize:'56px', margin:'30px' }} className='wi wi-day-sunny'></i>
            <p class="lead"><strong>Yesterday</strong></p>
          </div>
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item"><i class="wi wi-sunrise cityIcon"></i> 12:07:02 AM</li>
            <li class="list-group-item"><i class="wi wi-sunset cityIcon"></i> 12:07:02 AM</li>
            <li class="list-group-item"><i class="wi wi-barometer cityIcon"></i> 1081 millibars</li>
            <li class="list-group-item"><i class="wi wi-humidity cityIcon"></i> 76 humidity</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default City;
