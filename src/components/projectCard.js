import React from 'react';
import { PrimaryButton, SecondaryButton } from '../styles/common';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import Chips from './chips';


const StyledCard = styled(Card)({
    maxWidth: 400,
    margin: 8
});

function project (props) {

  let buttons = [];

  if(props.visitUrl != null){
    buttons.push(<PrimaryButton href={props.visitUrl} target="_blank">Visit</PrimaryButton>)
  }

  if(props.codeUrl != null){
    buttons.push(<SecondaryButton href={props.codeUrl} target="_blank">Code</SecondaryButton>)
  }


  return (
        <StyledCard>
            <CardMedia
              component="img"
              alt="project"
              height="140"
              image= {props.image}
              title="Project"
            />
            <CardContent>
              <Typography  variant="h5" gutterBottom><strong>{props.title}</strong></Typography>
              <Chips chips={props.chips}/>
              <p>{props.description}</p>
              {buttons}
            </CardContent>
        </StyledCard>
    );
}

export default project;
