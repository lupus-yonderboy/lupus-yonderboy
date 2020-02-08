import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container } from './Container';
import './Posts.css';

import {
  setPosts,
  setPost
} from './actions';
import { fetchPostsAndAuthors } from './fetchPostsAndAuthors';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: null,
      time: null,
      error: null,
    };
  }

  setPost(post) {
    this.props.setPost(post);
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <div key={post.Id}>
          <Link
            to={`/posts/${post.Id}`}
            onClick={() => this.setPost(post)}
            className="title"
          >{post.Title}</Link>
          <div className="author">
            {post.hasOwnProperty('_authorName')
                ? post._authorName
                : '?'}
          </div>
          <div className="content">
            {post.Content.slice(0, 230) + ' ...'}
          </div>
        </div>
      );
    });
  }

  componentDidMount() {
    const timer = (time) => {
      setTimeout(() => {
        if (this.state.loading) {
          time += 10;
          this.setState({ time: time });
          timer(time);
        }
      }, 10);
    };

    if (this.props.posts.length) {
      return;
    }

    this.setState({ loading: true });
    timer(0);

    fetchPostsAndAuthors()
      .then((posts) => {
        this.props.setPosts(posts);
      })
      .catch(() => {
        this.setState({ error: ':(' });
      })
      .finally(() => {
        this.setState({ loading: false });
      })
  } // end componentDidMount

  render() {
    return (
      <Container>
        {this.state.loading
            ? this.state.time
            : this.state.error}
        {this.renderPosts(this.props.posts)}
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
)(Posts);
