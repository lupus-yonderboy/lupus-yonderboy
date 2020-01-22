import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';
import { Header } from './Header';
import './App.css';

const urlPrefix = '/lupus-yonderboy';

export const App = () => {
  return (
    <Router>
      <Header>
        <div>
          <span className='header-span'>
            <Link to={urlPrefix + '/'} className='header-link'>
              HOME
            </Link>
          </span>
          <span className='header-span'>
            <Link to={urlPrefix + '/about'} className='header-link'>
              ABOUT
            </Link>
          </span>
        </div>
      </Header>
      <Switch>
        <Route exact path={urlPrefix + '/'} component={Home} />
        <Route path={urlPrefix + '/about'} component={About} />
      </Switch>
    </Router>
  );
};
