import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import './Posts.css'
import {
  setPosts,
  setPost
} from './actions';
import { fetchPostsAndAuthors } from './fetchPostsAndAuthors';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: null,
      time: null,
      error: null,
    };
  }

  componentDidMount() {
    if (this.props.post.Content) {
      return;
    }

    const postId = parseInt(this.props.match.params.postId);
    const findPost = (posts, id) => {
      return posts.find((p) => {
        return p.Id === id;
      });
    };

    if (this.props.posts.length) {
      const post = findPost(this.props.posts, postId);
      this.props.setPost(post);
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
        const post = findPost(posts, postId);
        this.props.setPost(post);
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
        {
          this.state.loading
            ?
          null
            :
          <div>
            <div className="title">{this.props.post.Title}</div>
            <div className="author">{this.props.post._authorName}</div>
            <div className="content">{this.props.post.Content}</div>
          </div>
        }
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
