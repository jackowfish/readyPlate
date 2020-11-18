import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
      <Header/>
      <Router>
        <Switch>
          <Route path="/profile">
            {/* Route to About ?? */}
          </Route>
          <Route path="/login">
            {/* Route to main */}
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();