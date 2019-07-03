import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const MyHeader = styled(Box)({
  width: "100%"
});

class Header extends Component {

  render () {
    return (
      <MyHeader mt={-3}>
        <h1>Header</h1>
      </MyHeader>
    );
  }
}

export default Header;
