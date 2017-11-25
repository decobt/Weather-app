import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import City from './City';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

var data = {
  '0':{'country':'Macedonia','city':'Skopje', 'temp':{'low':'15', 'high':'28'}, 'icon':'wi wi-day-sunny',
  'forecast':{
    'Yesterday':{'temp':32,'pressure':1012,'humidity':81, 'sunrise':'1485762037', 'sunset':'1445722037','icon':'wi-day-sunny'},
    'Today':{'temp':28,'pressure':1006,'humidity':65, 'sunrise':'1485764037', 'sunset':'1485796875','icon':'wi-fog'},
    'Tomorrow':{'temp':33,'pressure':1021,'humidity':87, 'sunrise':'1485762037', 'sunset':'1485798875','icon':'wi-day-fog'}
    }
  },
  '1':{'country':'England','city':'London', 'temp':{'low':'10', 'high':'15'}, 'icon':'wi wi-day-fog',
  'forecast':{
    'Yesterday':{'temp':18,'pressure':812,'humidity':81, 'sunrise':'1485762037', 'sunset':'1445722037','icon':'wi-fog'},
    'Today':{'temp':15,'pressure':866,'humidity':85, 'sunrise':'1485764037', 'sunset':'1485796875','icon':'wi-day-fog'},
    'Tomorrow':{'temp':16,'pressure':881,'humidity':97, 'sunrise':'1485762037', 'sunset':'1485798875','icon':'wi-day-fog'}
    }
  },
  '2':{'country':'Spain','city':'Barcelona', 'temp':{'low':'18', 'high':'34'}, 'icon':'wi wi-day-cloudy-gusts',
  'forecast':{
    'Yesterday':{'temp':32,'pressure':512,'humidity':61, 'sunrise':'1485762037', 'sunset':'1445722037','icon':'wi-day-fog'},
    'Today':{'temp':34,'pressure':506,'humidity':65, 'sunrise':'1485764037', 'sunset':'1485796875','icon':'wi-cloudy-gusts'},
    'Tomorrow':{'temp':30,'pressure':521,'humidity':57, 'sunrise':'1485762037', 'sunset':'1485798875','icon':'wi-day-cloudy-windy'}
    }
  },
  '3':{'country':'France','city':'Paris', 'temp':{'low':'13', 'high':'26'}, 'icon':'wi wi-day-cloudy',
  'forecast':{
    'Yesterday':{'temp':20,'pressure':912,'humidity':81, 'sunrise':'1485762037', 'sunset':'1445722037','icon':'wi-day-cloudy-gusts'},
    'Today':{'temp':26,'pressure':906,'humidity':75, 'sunrise':'1485764037', 'sunset':'1485796875','icon':'wi-day-cloudy'},
    'Tomorrow':{'temp':23,'pressure':941,'humidity':90, 'sunrise':'1485762037', 'sunset':'1485798875','icon':'wi-day-fog'}
    }
  },
  '4':{'country':'Italy','city':'Rome', 'temp':{'low':'18', 'high':'32'}, 'icon':'wi wi-day-hail',
  'forecast':{
    'Yesterday':{'temp':28,'pressure':1112,'humidity':61, 'sunrise':'1485762037', 'sunset':'1445722037','icon':'wi-day-sprinkle'},
    'Today':{'temp':32,'pressure':1006,'humidity':65, 'sunrise':'1485764037', 'sunset':'1485796875','icon':'wi-hail'},
    'Tomorrow':{'temp':26,'pressure':1025,'humidity':67, 'sunrise':'1485762037', 'sunset':'1485798875','icon':'wi-day-rain-mix'}
    }
  },
  '5':{'country':'Portugal','city':'Lisabon', 'temp':{'low':'10', 'high':'37'}, 'icon':'wi wi-day-sunny',
  'forecast':{
    'Yesterday':{'temp':32,'pressure':822,'humidity':41, 'sunrise':'1485762037', 'sunset':'1445722037','icon':'wi-day-light-wind'},
    'Today':{'temp':37,'pressure':846,'humidity':45, 'sunrise':'1485764037', 'sunset':'1485796875','icon':'wi-day-sunny'},
    'Tomorrow':{'temp':34,'pressure':861,'humidity':47, 'sunrise':'1485762037', 'sunset':'1485798875','icon':'wi-day-sunny'}
    }
},
  '6':{'country':'Sweden','city':'Stockholm', 'temp':{'low':'4', 'high':'12'}, 'icon':'wi wi-day-snow',
  'forecast':{
    'Yesterday':{'temp':10,'pressure':1212,'humidity':91, 'sunrise':'1485762037', 'sunset':'1445722037','icon':'wi-day-thunderstorm'},
    'Today':{'temp':12,'pressure':1206,'humidity':95, 'sunrise':'1485764037', 'sunset':'1485796875','icon':'wi-day-snow'},
    'Tomorrow':{'temp':13,'pressure':1221,'humidity':97, 'sunrise':'1485762037', 'sunset':'1485798875','icon':'wi-day-sleet-storm'}
    }
  },
  '7':{'country':'Greece','city':'Athens', 'temp':{'low':'28', 'high':'38'}, 'icon':'wi wi-day-sunny',
  'forecast':{
    'Yesterday':{'temp':32,'pressure':302,'humidity':21, 'sunrise':'1485762037', 'sunset':'1445722037','icon':'wi-day-light-wind'},
    'Today':{'temp':38,'pressure':280,'humidity':25, 'sunrise':'1489764037', 'sunset':'1445796875','icon':'wi-day-sunny'},
    'Tomorrow':{'temp':34,'pressure':276,'humidity':27, 'sunrise':'1485762037', 'sunset':'1488798875','icon':'wi-day-cloudy'}
    }
  },
  '8':{'country':'Russia','city':'Moscow', 'temp':{'low':'3', 'high':'9'}, 'icon':'wi wi-day-snow',
  'forecast':{
    'Yesterday':{'temp':6,'pressure':1012,'humidity':81, 'sunrise':'1485762037', 'sunset':'1445722037','icon':'wi-day-rain-mix'},
    'Today':{'temp':9,'pressure':1106,'humidity':85, 'sunrise':'1525764037', 'sunset':'1486796875','icon':'wi-day-snow'},
    'Tomorrow':{'temp':2,'pressure':1061,'humidity':77, 'sunrise':'1485762037', 'sunset':'1488798875','icon':'wi-day-haze'}
    }
  }
};

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/"  >
      <IndexRoute component={App} data={data} />
      <Route path="city/:name" component={City} data={data}/>
    </Route>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
