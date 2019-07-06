import React from 'react';
import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Home from './home';
import Projects from './projects';
import Resume from './resume';

export default function Content(){
    return(
        <Container maxWidth="md">
            <Switch>
                <Route path={`/`} exact component={Home} />
                <Route path={`/projects`} component={Projects} />
                <Route path={`/resume`} component={Resume} />
            </Switch>
        </Container>
    )
}