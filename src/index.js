import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/"  >
      <IndexRoute component={App} />
      <Route path="city/:name" component={App}/>
    </Route>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
