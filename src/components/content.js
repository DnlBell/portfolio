import React from 'react';
import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Home from './home';
import Projects from './projects';
import Resume from './resume';
import { useTransition, animated } from 'react-spring'
import useRouter from '../useRouter'
import Footer from './footer';
import {ContentBox} from '../styles/common' 

export default function Content(){

    const { location } = useRouter()
    const transitions = useTransition(location, location => location.pathname, {
        from: { position: 'absolute', opacity: 0,  },
        enter: { opacity: 1,  },
        leave: { opacity: 0,  },
    })
    return transitions.map(({ item, props, key }) => (
        <ContentBox>
            <animated.div key={key} style={props}>
                <Container maxWidth="md">
                    <Switch location={item}>
                        <Route path={`/`} exact component={Home} />
                        <Route path={`/projects`} component={Projects} />
                        <Route path={`/resume`} component={Resume} />
                    </Switch>
                    <Footer/>
                </Container>
            </animated.div>
        </ContentBox>
    ))
}