import React from 'react';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { ContentBox } from '../styles/common';
import Avatar from '@material-ui/core/Avatar';
import Face from '../images/face.jpg';

const Image = styled(Avatar)({
  width: 250,
  height: 250,
  margin: 10
});

const ImageBox = styled(Box)({
  flexDirection:"column",
  textAlign:"center",
  float: "left"
});

function Home () {
  return (
    <ContentBox mt={2} >
      <ImageBox>
        <Image alt="Daniel Bell" src={Face}/>
        <i>"Hello"</i>
      </ImageBox>
      <div>
        <h2> Welcome </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </ContentBox>
  );
}

export default Home;
