import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';
import { Header } from './Header';
import './App.css';

export const App = () => {
  return (
    <Router>
      <Header>
        <div>
          <span className='header-span'>
            <Link to='/' className='header-link'>
              HOME
            </Link>
          </span>
          <span className='header-span'>
            <Link to='/about' className='header-link'>
              ABOUT
            </Link>
          </span>
        </div>
      </Header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
};
