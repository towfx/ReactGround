import React from 'react';
import ReactDOM from 'react-dom';
import indexRoutes from './routes/index.jsx';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import './assets/scss/style.css';



ReactDOM.render(
  <Provider store={store}>

    <HashRouter>

      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>

    </HashRouter>
  </Provider>
  , document.getElementById('root'));
