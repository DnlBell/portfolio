import React, { Component } from 'react';
import {Typography, Box, Chip } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { ContentBox, PrimaryButton, SecondaryButton } from '../styles/common';

const SubHeading = styled(Box)({
  marginTop : 8,
  marginBottom: 8
});

const SkillChip = styled(Chip)({
  marginLeft: 4,
  marginTop: 4
})

class Resume extends Component {

  render () {
    return (
      <ContentBox mt={2}>
        <div>
          <Typography variant="h3" gutterBottom>Danny Bell</Typography>
          <span role="img" aria-label="City">🏙️</span> Seattle, Washington
          <br/>
          <span role="img" aria-label="Mobile">📱</span> (206)765-7109
          <SubHeading>
            <Typography variant="h5">Summary</Typography>
          </SubHeading>
            A software developer with experience developing web, mobile, and cloud technologies. A background in technical support and systems administration for professional services.
          <SubHeading>
            <Typography variant="h5">Skills</Typography>
          </SubHeading>
          <SkillChip color="primary" label="JavaScript"/>
          <SkillChip color="primary" label="Java"/>
          <SkillChip style={{background: 'grey', color: 'white'}} label="MySQL"/>
          <SkillChip color="secondary" label="React.js"/>
          <SkillChip color="Secondary" label="Node.js"/>
          <SkillChip color="Secondary" label="Express.js"/>
          <SkillChip color="Secondary" label="ReactNative"/>
          <SkillChip color="Secondary" label="Redux"/>
          <SkillChip style={{background: 'grey', color: 'white'}} label="REST"/>
          <SkillChip style={{background: '#6293c9', color: 'white'}} label="Git"/>
          <SkillChip style={{background: '#6293c9', color: 'white'}} label="GitHub"/>
          <SkillChip style={{background: '#6293c9', color: 'white'}} label="Jest"/>
          <SkillChip style={{background: '#6293c9', color: 'white'}} label="NPM"/>
          <SkillChip style={{background: '#6293c9', color: 'white'}} label="TravisCi"/>
          <SkillChip color="primary" label="HTML"/>
          <SkillChip color="primary" label="CSS"/>
          <SkillChip style={{background: 'grey', color: 'white'}} label="JSON"/>
          <SubHeading>
            <Typography variant="h5">Education</Typography>
          </SubHeading>
          <Typography color="primary"><strong>B.A.S of Application Development | North Seattle College | Class of 2019</strong></Typography>
          This program focused on core computer science competencies and the skills needed to develop software in a collaborative environment. Using agile methods, Git, & GitHub, we developed software for web, mobile, and cloud-based platforms with quarter long practicum projects for each focus.
          <SubHeading>
            <Typography variant="h5">Recent Experince</Typography>
          </SubHeading>
          <Typography color="primary"><strong>Helpdesk Specialist | MG2 | August 2014 – Present</strong></Typography>
          I am responsible for in-person and remote technical support for over three-hundred people in a primarily Windows domain environment. I closed over 2100 support tickets last year. With effective time management and issue elevation, this has resulted in virtually no backlogged issues week to week. While here, I have developed tools with Node.js to merge data from our vendor's warranty lookup API with our current asset data.

        </div>
      </ContentBox>
    );
  }
}

export default Resume;
