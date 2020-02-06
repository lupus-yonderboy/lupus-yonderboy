import React, { Component } from 'react';

import { Container } from './Container';

const posts = [];

export class Posts extends Component {
  renderPosts(posts) {
    return posts.map((post) => {
      return <div>{post.title}</div>
    });
  }

  componentDidMount() {
    fetch('https://lupus-yonderboy-go-env.wv5mqwfbqj.us-east-1.elasticbeanstalk.com/posts')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        for (let post in json) {
          posts.push(post);
        }
      })
  }

  render() {
    return (
      <Container>
        {this.renderPosts(posts)}
      </Container>
    );
  }
};
