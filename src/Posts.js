import React, { Component } from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from './Container';
import './Posts.css';
import {
  setPosts,
  setPost
} from './actions';
import { abbreviate } from './helpers';
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
    const sortedPosts = posts.sort((a, b) => {
      return new Date(b.DateCreated) - new Date(a.DateCreated);
    });
    return sortedPosts.map((post) => {
      const strippedContent = post.Content.replace(/<p>/g, '').replace(/<\/p>/g, '');
      return (
        <div key={post.Id}>
          <Link
            to={`/posts/${post.Id}`}
            onClick={() => this.setPost(post)}
            className="index-title"
          >{post.Title}</Link>
          <div className="index-author">
            {post.hasOwnProperty('_authorName')
                ? post._authorName
                : '?'}
            {` | ${moment(post.DateCreated).utc().format("MMM DD, YYYY")}`}
          </div>
          <div className="index-content">
            {abbreviate(strippedContent.slice(0, 230))}
          </div>
        </div>
      );
    });
  }

  componentDidMount() {
    if (this.props.posts.length) {
      return;
    }

    const timer = (time) => {
      setTimeout(() => {
        if (this.state.loading) {
          time += 10;
          this.setState({ time: time });
          timer(time);
        }
      }, 10);
    };

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
        {this.state.loading
          ? null
          : this.renderPosts(this.props.posts)}
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
