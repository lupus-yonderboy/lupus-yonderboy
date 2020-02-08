import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Container } from './Container';

import { setPosts } from './actions';
import { fetchPostsAndAuthors } from './fetchPostsAndAuthors';

class Home extends Component {
  componentDidMount() {
    if (this.props.posts.length) {
      return;
    }

    fetchPostsAndAuthors()
      .then((posts) => {
        this.props.setPosts(posts);
      });
  }

  render() {
    return (
      <Container>
        Hi.
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  setPosts: (posts) => {
    return dispatch(setPosts(posts));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
