import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { styled } from '@material-ui/styles';
import { Link } from "react-router-dom";


const MyTabs = styled(Tabs)({
    display: "flex",
    justifyContent: "space-evenly"
  });

export default function Nav({location}) {
    return(
        <AppBar position="sticky">
            <MyTabs
                centered
                value={location.pathname}
                >
                <Tab component={Link} to={`/`} label='Home' value="/"/>
                <Tab component={Link} to={`/projects`} label='Projects' value="/projects"/>
                <Tab component={Link} to={`/resume`} label='Resume'value="/resume"/>
            </MyTabs>
        </AppBar>
    )
}