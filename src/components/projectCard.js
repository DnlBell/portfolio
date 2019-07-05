import React from 'react';
import { PrimaryButton, SecondaryButton, SkillChip } from '../styles/common';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import Graphene from '../images/graphene.jpg'

const StyledCard = styled(Card)({
    maxWidth: 400,
    margin: 8
});

function Projects () {
    return (
          <StyledCard>
              <CardMedia
                component="img"
                alt="Graphene"
                height="140"
                image= {Graphene}
                title="Graphene"
              />
              <CardContent>
                <Typography  variant="h5" gutterBottom><strong>Project Title</strong></Typography>
                <SkillChip color="primary" label="JavaScript"/>
                <SkillChip color="secondary" label="React.js"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <PrimaryButton>Visit</PrimaryButton>
                <SecondaryButton>Code</SecondaryButton>
              </CardContent>
          </StyledCard>
    );
}

export default Projects;
