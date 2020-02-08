import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container } from './Container';
import './Posts.css';

import { setPosts } from './actions';

class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: null,
        time: null,
        error: null,
      };
    }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <div key={post.Id}>
          <Link to={`/posts/${post.Id}`} className="title">
            {post.Title}
          </Link>
          <div className="author">
            {post.hasOwnProperty('_authorName')
                ? post._authorName
                : 'Anonymous'}
          </div>
          <div className="content">
            {post.Content.slice(0, 230) + ' ...'}
          </div>
        </div>
      );
    });
  }

  componentDidMount() {
    const environment = process.env.NODE_ENV || 'production';
    const url = environment === 'production'
      ? 'https://lupus-yonderboy-go-env.wv5mqwfbqj.us-east-1.elasticbeanstalk.com/'
      : 'http://localhost:5000/';

    const fetchPosts = fetch(url + 'posts')
      .then((res) => res.json());

    const fetchAuthors = fetch(url + 'authors')
      .then((res) => res.json());

    const associatePostsWithAuthors = ({ postsRes, authorsRes }) => {
      const authors = {};
      const posts = [];
      for (let author of authorsRes) {
        authors[author.Id] = author.Name;
      }
      for (let post of postsRes) {
        posts.push({
          _authorName: authors[post.Author],
          ...post,
        });
      }
      return posts;
    };

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

    Promise.all([fetchPosts, fetchAuthors])
      .then((res) => {
        this.props.setPosts(
          associatePostsWithAuthors({
            postsRes: res[0],
            authorsRes: res[1],
          }),
        );
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
};

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
)(Posts);
