import React, { Component } from 'react';
import { Route, Link, Switch, HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Header } from './Header';
import {
  setDark,
  setLight
} from './actions';
import About from './About';
import Home from './Home';
import Post from './Post';
import Posts from './Posts';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div className={this.props.darkMode ? 'dark' : 'light'}>
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
                <span className='header-span'>
                  <Link to='#'
                    className='header-link'
                    onClick={
                      this.props.darkMode
                        ? this.props.setLight
                        : this.props.setDark
                    }>
                    {
                      this.props.darkMode
                        ? 'LIGHT'
                        : 'DARK'
                    }
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
          </div>
        </Router>
      </Provider>
    );
  }
};

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
});

const mapDispatchToProps = (dispatch) => ({
  setDark: () => {
    return dispatch(setDark());
  },
  setLight: () => {
    return dispatch(setLight());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);