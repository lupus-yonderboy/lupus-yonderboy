import React, { Component } from 'react';

import { Container } from './Container';

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.posts = [];
  }

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
          this.posts = [ ...this.posts, post ];
          console.log(this.posts);
        }
      })
  }

  render() {
    return (
      <Container>
        {this.renderPosts(this.posts)}
      </Container>
    );
  }
};
