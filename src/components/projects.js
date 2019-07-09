import React from 'react';
import { ContentBox } from '../styles/common';
import ProjectCard from './projectCard';
import Graphene from '../images/graphene.jpg'

function Projects () {
    return (
          <ContentBox mt={2}>
                <ProjectCard 
                    image={Graphene} 
                    title="project title" 
                    description="stuff" 
                    chips={["javascript","react","git"]} 
                />
                <ProjectCard 
                    image={Graphene} 
                    title="project title" 
                    description="stuff" 
                    chips={["javascript","react"]} 
                />
                <ProjectCard 
                    image={Graphene} 
                    title="project title" 
                    description="stuff" 
                    chips={["javascript","react"]} 
                />
                <ProjectCard 
                    image={Graphene} 
                    title="project title" 
                    description="stuff" 
                    chips={["javascript","react"]} 
                />
          </ContentBox>
    );
}

export default Projects;
