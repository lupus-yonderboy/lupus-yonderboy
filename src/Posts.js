import React, { Component } from 'react';
import { Container } from './Container';


export class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        authorsLoading: null,
        postsLoading: null,
        time: null,
        error: null,
      };
    }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <div key={post.Id}>
          <div>
            {post.Title}
          </div>
          <div>
            {post.hasOwnProperty('_authorName') ? post._authorName : 'Anonymous'}
          </div>
          <div>
            {post.Content}
          </div>
        </div>
      );
    });
  }

  componentWillMount() {
    const environment = process.env.NODE_ENV || 'production';
    const url = environment === 'production'
      ? 'https://lupus-yonderboy-go-env.wv5mqwfbqj.us-east-1.elasticbeanstalk.com/'
      : 'https://localhost:5000/';

    this.setState({
      postsLoading: true,
      authorsLoading: true
    });

    const timer = (time) => {
      setTimeout(() => {
        if (this.state.postsLoading) {
          time += 50;
          this.setState({ time: time });
          timer(time);
        } else {
          this.setState({ time: 0 });
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
      .catch(() => {
        this.setState({ error: ':(' });
      })
      .finally(() => {
        this.setState({ postsLoading: false });
      })

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
        this.setState({ error: ':(' });
      })
      .finally(() => {
        this.setState({ authorsLoading: false });
      })
  }

  render() {
    return (
      <Container>
        {
          this.state.postsLoading || this.state.authorsLoading
            ? this.state.time
            : this.state.error
        }
        {this.renderPosts(this.state.posts)}
      </Container>
    );
  }
};
