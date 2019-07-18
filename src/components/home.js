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
        <p>Thank you for visiting my portfolio. In the projects tab you will find descriptions and links to projects I have been directly involved in. Additonal infomation about my employment history and education are contained in the resume tab. There you will also find a download link to a pdf copy of my current resume.</p>
        <p>Over the last two years I have pursued and completed a degree in Application Development. You will find references to some of the code I have created from these classes in the projects section of this site. Many of these projects were collaborative, using Git to manage source control, and agile style project management techniques.</p>
        <p>In conjunction with my education, I have been employed as a Helpdesk Specialist by the architecture firm MG2. I have been with this company for nearly five years providing technical support from their flagship office in Seattle.</p>
        <p>I am currently seeking a position where I will be more closely involved in the development of software. If you have any positions you think I would be suitable for, or have an intersting project you want to talk about, don't hesitate to contact me. You can find my contact information under the resume tab.</p>
        <p>Thanks for visiting!</p>
        <p><i><strong>~ Daniel Bell</strong></i></p>
      </div>
    </ContentBox>
  );
}

export default Home;
