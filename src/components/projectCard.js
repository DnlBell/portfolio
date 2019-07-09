import React from 'react';
import { PrimaryButton, SecondaryButton } from '../styles/common';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { styled, getThemeProps } from '@material-ui/styles';
import Chips from './chips';


const StyledCard = styled(Card)({
    maxWidth: 400,
    margin: 8
});

function project (props) {
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
                <PrimaryButton>Visit</PrimaryButton>
                <SecondaryButton>Code</SecondaryButton>
              </CardContent>
          </StyledCard>
    );
}

export default project;
