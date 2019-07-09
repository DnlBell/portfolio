import React from 'react';
import { ContentBox } from '../styles/common';
import ProjectCard from './projectCard';
import Graphene from '../images/graphene.jpg'

function Projects () {
    return (
          <ContentBox mt={2}>
                <ProjectCard 
                    image={Graphene} 
                    title="Rebel Singularity" 
                    description="A prototype text based adventure game." 
                    chips={["javascript","react","redux"]}
                    visitUrl="https://devendpoint.z5.web.core.windows.net/"
                    codeUrl="https://github.com/DnlBell/rebel-singularity"
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
