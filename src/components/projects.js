import React from 'react';
import { ContentBox } from '../styles/common';
import ProjectCard from './projectCard';

function Projects () {
    return (
          <ContentBox mt={2}>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
          </ContentBox>
    );
}

export default Projects;
