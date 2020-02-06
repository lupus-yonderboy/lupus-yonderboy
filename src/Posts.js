import React, { Component } from 'react';

import { Container } from './Container';

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.posts = [];
  }

  renderPosts(posts) {
    return posts.map((post) => {
      console.log(post, post.Title, post.title, post.Content, post.content);
      return (
        <div>
          {post.Title}
          {post.Content}
        </div>
      );
    });
  }

  componentDidMount() {
    fetch('https://lupus-yonderboy-go-env.wv5mqwfbqj.us-east-1.elasticbeanstalk.com/posts')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        for (let post of json) {
          this.posts = [ ...this.posts, post ];
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
