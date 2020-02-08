import React, { Component } from 'react';

import { Container } from './Container';
import './Posts.css';

export class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        loading: null,
        time: null,
        error: null,
      };
    }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <div key={post.Id}>
          <div className="title">
            {post.Title}
          </div>
          <div className="author">
            {
              post.hasOwnProperty('_authorName')
                ? post._authorName
                : 'Anonymous'
            }
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

    this.setState({ loading: true });

    const timer = (time) => {
      setTimeout(() => {
        if (this.state.loading) {
          time += 10;
          this.setState({ time: time });
          timer(time);
        }
      }, 10);
    }

    timer(0);

    fetch(url + 'posts')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        for (let post of json) {
          this.setState({
            posts: [ ...this.state.posts, post ]
          });
        }
      })
      .then(() => {
        fetch(url + 'authors')
          .then((res) => {
            return res.json();
          })
          .then((json) => {
            let posts = this.state.posts;
            let authors = {};
            for (let author of json) {
              authors[author.Id] = author.Name;
            }
            for (let post of posts) {
              post._authorName = authors[post.Author];
            }
            this.setState({
              posts: posts
            });
          })
          .catch(() => {
            throw new Error();
          })
      })
      .catch(() => {
        this.setState({ error: ':(' });
      })
      .finally(() => {
        this.setState({ loading: false });
      })
  }

  render() {
    return (
      <Container>
        {
          this.state.loading
            ? this.state.time
            : this.state.error
        } {
          this.state.loading
            ? null
            : this.renderPosts(this.state.posts)
        }
      </Container>
    );
  }
};
