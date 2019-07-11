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
        <h2> Welcome! </h2>
        <p>Thank you for visiting my portfolio. Your time is valuable and your willingness to come here is appreciated. On this site you will find references to projects I have been directly involved in or wholly my own creation. This site itself was put together by me using React, Material-UI, and other JavaScript libraries. There is also a section containing my resume, with downloadable versions available. </p>
        <p>Over the last two years I have pursued and completed a Bachelor of Applied Science degree in application development. This program exposed me to web, mobile, and cloud-based tech stacks. You will find references to some of the code I have created from these classes in the projects section of this site. Many of these projects were collaborative, using Git to manage source control, and agile style project management to set priorities and timetables.</p>
        <p>In conjunction with my education, I have been employed as a Helpdesk Specialist by the architecture firm MG2. I have been with this company for nearly five years providing technical support from their flagship office in Seattle.</p>
        <p>Looking toward my future, I seek to find new challenges to help grow my skills as a software developer. I hope that what you see on this site will encourage you to consider my skills for such challenges you may be seeking a champion for.</p>
        <p>Thanks for visiting!</p>
        <p><i><strong>~ Daniel Bell</strong></i></p>
      </div>
    </ContentBox>
  );
}

export default Home;
