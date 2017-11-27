import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import City from './City';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/"  >
      <IndexRoute component={App} />
      <Route path="city/:id" component={City} />
    </Route>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
