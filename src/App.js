import React from 'react';
import { Route, Link, Switch, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header } from './Header';
import About from './About';
import Home from './Home';
import Post from './Post';
import Posts from './Posts';

import './App.css';

export const App = (props) => {
  return (
    <Provider store={props.store}>
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
            <span className='header-span'>
              <Link to='/posts' className='header-link'>
                POSTS
              </Link>
            </span>
          </div>
        </Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/posts/:postId' component={Post} />
          <Route path='/posts' component={Posts} />
        </Switch>
      </Router>
    </Provider>
  );
};
