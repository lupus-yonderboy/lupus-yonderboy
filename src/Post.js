import React, { Component } from 'react';
import * as moment from 'moment';
import { Parser } from 'html-to-react';
import { connect } from 'react-redux';
import { Container } from './Container';
import './Posts.css'
import {
  setPosts,
  setPost
} from './actions';
import { fetchPostsAndAuthors } from './fetchPostsAndAuthors';
import { getPost } from './getPost';

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
    if (!this.props.posts.length) {
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
          const id = parseInt(this.props.match.params.postId);
          const post = getPost(posts, id);
          this.props.setPost(post);
          this.props.setPosts(posts);
        })
        .catch(() => {
          this.setState({ error: ':(' });
        })
        .finally(() => {
          this.setState({ loading: false });
        })
    } else {
      const id = parseInt(this.props.match.params.postId);
      const post = getPost(this.props.posts, id);
      this.props.setPost(post);
    }

  } // end componentDidMount

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const id = parseInt(this.props.match.params.postId);
      const post = getPost(this.props.posts, id);
      this.props.setPost(post);
    }
  }

  render() {
    const htmlParser = new Parser();
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
            <h1 className="title">{this.props.post.Title}</h1>
            <div className="author">{this.props.post._authorName}</div>
            <div className="date">
              {
                moment(this.props.post.DateCreated).utc().format("MMM DD, YYYY [at] hh:mma")
              } {
                this.props.post.DateUpdated === this.props.post.DateCreated
                 ? null
                 : `| updated ${moment(this.props.post.DateUpdated).utc().format("MMM DD, YYYY [at] hh:mma")}`
              } UTC
            </div>
            <div className="content">{htmlParser.parse(this.props.post.Content)}</div>
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
