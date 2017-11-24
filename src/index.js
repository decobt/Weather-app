import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import City from './City';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

var data = {
  '0':{'country':'Macedonia','city':'Skopje', 'temp':{'low':'15', 'high':'28'}, 'icon':'wi wi-day-sunny'},
  '1':{'country':'England','city':'London', 'temp':{'low':'10', 'high':'15'}, 'icon':'wi wi-day-fog'},
  '2':{'country':'Spain','city':'Barcelona', 'temp':{'low':'18', 'high':'34'}, 'icon':'wi wi-day-cloudy-gusts'},
  '3':{'country':'France','city':'Paris', 'temp':{'low':'13', 'high':'26'}, 'icon':'wi wi-day-cloudy'},
  '4':{'country':'Italy','city':'Rome', 'temp':{'low':'18', 'high':'32'}, 'icon':'wi wi-day-hail'},
  '5':{'country':'Portugal','city':'Lisabon', 'temp':{'low':'10', 'high':'37'}, 'icon':'wi wi-day-sunny'},
  '6':{'country':'Sweden','city':'Stockholm', 'temp':{'low':'4', 'high':'12'}, 'icon':'wi wi-day-snow'},
  '7':{'country':'Greece','city':'Athens', 'temp':{'low':'28', 'high':'38'}, 'icon':'wi wi-day-sunny'},
  '8':{'country':'Russia','city':'Moscow', 'temp':{'low':'3', 'high':'9'}, 'icon':'wi wi-day-snow'}
};

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/"  >
      <IndexRoute component={App} data={data} />
      <Route path="city/:name" component={City}/>
    </Route>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
