import React, { Component } from 'react';

import { Container } from './Container';

const posts = [];

export class Posts extends Component {
  componentDidMount() {
    fetch('http://lupus-yonderboy-go-env.wv5mqwfbqj.us-east-1.elasticbeanstalk.com/posts')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
      })
  }

  render() {
    return (
      <Container>
        laughing out loud.
      </Container>
    );
  }
};
