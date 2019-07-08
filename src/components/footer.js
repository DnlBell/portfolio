import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const MyFooter = styled(Box)({
  width: "100%",
  textAlign: "center",
  margin: "8px"
});

class Footer extends Component {

  render () {
    return (
      <MyFooter mt={2}>
        <i>Copyright © Daniel Bell 2019. All rights reserved</i>
      </MyFooter>
    );
  }
}

export default Footer;