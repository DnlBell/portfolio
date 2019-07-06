import React from 'react';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Sky from '../images/Sky.png';

const MyHeader = styled(Box)({
  width: "100%",
  textAlign: "center",
  backgroundImage: `url(${Sky})`,
  height: 100,
  lineHeight: 3
});

function Header() {
    return (
      <MyHeader mt={-3}>
        <h1><i>Portfolio</i></h1>
      </MyHeader>
    );
}

export default Header;
