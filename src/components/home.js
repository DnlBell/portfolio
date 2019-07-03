import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import Container from '@material-ui/core/Container';

const MyContainer = styled(Container)({

  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  height: 1000
});


class Home extends Component {

  render () {
    return (
      <MyContainer>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </MyContainer>
    );
  }
}

export default Home;
