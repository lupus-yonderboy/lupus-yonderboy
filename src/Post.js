import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from './Container';

import {
  setPosts,
  setPost
} from './actions';

class Post extends Component {
  componentDidMount() {
    if (this.props.post) {
      return;
    }

    if (this.props.posts) {
      debugger;
      return;
    }


  }

  render() {
    return (
      <Container>
        {this.props.post.Content}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  post: state.post,
});

const mapDispatchToProps = (dispatch) => ({
  setPosts: (posts) => {
    return dispatch(setPosts(posts));
  },
  setPost: (post) => {
    return dispatch(setPost(post));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
