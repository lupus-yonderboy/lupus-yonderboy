import React, { Component } from 'react';
import { Container } from './Container';



export class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
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
            {post.Content}
          </div>
        </div>
      );
    });
  }

  componentDidMount() {
    const environment = process.env.NODE_ENV || 'production';
    const url = environment === 'production'
      ? 'https://lupus-yonderboy-go-env.wv5mqwfbqj.us-east-1.elasticbeanstalk.com/'
      : 'https://localhost:5000/';

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
  }

  render() {
    return (
      <Container>
        {this.renderPosts(this.state.posts)}
      </Container>
    );
  }
};
