import React, { Component } from 'react';
import { Link } from 'react-router';

import './index.css';

class City extends Component{
  constructor(props){
    super(props);
    //set initial state data
    this.state = {
      data : this.props.route.data
    }
  }
  //run before the component is rendered
  componentWillMount(){
    //loop through the data
    for(var i in this.state.data){
      //find data about our city, get the name from params
      if(this.state.data[i].city === this.props.params.name){
        //when found, update the state with new information
        this.setState({
          data: this.state.data[i]
        });
      }
    }
  }
  render(){
    //get forecast data and assign it to newdata
    var newdata = this.state.data['forecast'];
    var rows = [];
    //loop through data and create component for each
    for(var i in newdata){
      rows.push(<InfoPanel key={i} kluc={i} data={newdata[i]} />);
    }
    return(
      <div>
      <div><h2 style={{color:'white'}}>Location: {this.props.params.name}</h2></div>
      <div className="row">
        {rows}
      </div>
      <div className="row ">
      <div className="col-sm-12">
        <Link to="/" className="btn btn-default">
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
    //get the sunrise time
    var sunrise =new Date(+this.props.data['sunrise']).toLocaleTimeString();
    //get the sunset time
    var sunset =new Date(+this.props.data['sunset']).toLocaleTimeString();

    return (
      <div className="col-sm-4">
        <div className="panel panel-red">
          <div className="panel-heading  text-center">
            <h3 style={{fontSize:'36px'}}><i className="wi wi-thermometer"></i> {this.props.data['temp']}°C</h3>
          </div>
          <div className="panel-body text-center" >
            <i className={'panel-icon wi '+ this.props.data['icon']}></i>
            <p className="lead"><strong>{ this.props.kluc }</strong></p>
          </div>
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item"><i className="wi wi-sunrise cityIcon"></i> {sunrise}</li>
            <li className="list-group-item"><i className="wi wi-sunset cityIcon"></i> {sunset}</li>
            <li className="list-group-item">
              <i className="wi wi-barometer cityIcon"></i> {this.props.data['pressure']} millibars</li>
            <li className="list-group-item">
              <i className="wi wi-humidity cityIcon"></i> {this.props.data['humidity']} humidity</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default City;
