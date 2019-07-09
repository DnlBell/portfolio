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
                    description="A React driven text based RPG. This is a personal project I have been developing off and on since Dec. 2018. To 
                    manage player and game state I am using React-Redux. I am currently refining a prototype interface using 
                    Material-UI and React Router." 
                    chips={["javascript","react","redux"]}
                    visitUrl="https://devendpoint.z5.web.core.windows.net/"
                    codeUrl="https://github.com/DnlBell/rebel-singularity"
                />
                <ProjectCard 
                    image={Graphene} 
                    title="Merry Fairy Tales" 
                    description="In this project our team developed a web based administration portal that managed content for a multilingual 
                    fairy tale book application. I was tasked with developing a continous integration pipeline for our front-end 
                    group. Leveraging Travis CI, Azure and Node I set in place test and deployment automation. " 
                    chips={["javascript","node","travisci","azure"]}
                    codeUrl="https://github.com/MerryFairyTalesAD440/UX-UI"
                />
                <ProjectCard 
                    image={Graphene} 
                    title="MindSpand" 
                    description="An application for finding and purchasing seats in local classes. It was built with React Native using JavaScript. I 
                    worked with my team to implement routing, components, and unified styling. We worked with our client to 
                    interface with their pre-existing backend to store and reference state information using React Redux. " 
                    chips={["javascript","reactnative","redux","jest"]}
                    codeUrl="https://github.com/NorthSeattleCollegeDreamTeam/NSCApp"
                />
                <ProjectCard 
                    image={Graphene} 
                    title="DigiGeo" 
                    description="A version of geocaching for android. Our team used the google maps API and Room persistence Database to 
                    place and store “caches” containing text that would only open when the user was in proximity. I was responsible   
                    for the project framework, implementing the Room database, and testing using Espresso with Circle Ci." 
                    chips={["java","android","espresso","circleci"]} 
                    codeUrl="https://github.com/DigiGeo/DigiGeoApp"
                />
          </ContentBox>
    );
}

export default Projects;
