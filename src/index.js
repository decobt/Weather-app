import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

var data = {
  '0':{'country':'Macedonia','city':'Skopje', 'temp':{'low':'15', 'high':'28'}},
  '1':{'country':'England','city':'London', 'temp':{'low':'10', 'high':'15'}},
  '2':{'country':'Spain','city':'Barcelona', 'temp':{'low':'18', 'high':'34'}},
  '3':{'country':'France','city':'Paris', 'temp':{'low':'13', 'high':'26'}},
};

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/"  >
      <IndexRoute component={App} data={data} />
      <Route path="city/:name" component={App}/>
    </Route>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
