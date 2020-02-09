import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import { setPosts } from './actions';
import { fetchPostsAndAuthors } from './fetchPostsAndAuthors';

class About extends Component {
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
        "Chaos, Mr. Who," Lupus Yonderboy said. "That is our mode and modus. That is our central kick."
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
)(About);
