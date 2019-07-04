import React, { Component, Fragment } from 'react';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { styled } from '@material-ui/styles';
import { Container } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Projects from './components/projects';
import Resume from './components/resume';
import AppBar from '@material-ui/core/AppBar';

const MyTabs = styled(Tabs)({
  display: "flex",
  justifyContent: "space-evenly"
});

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>
      <div className="App">
      <Route
          path="/"
          render={({ location }) => (
        <Fragment>
          <Header/>
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
          <Container maxWidth="md">
            <Switch>
              <Route path={`/`} exact component={Home} />
              <Route path={`/projects`} component={Projects} />
              <Route path={`/resume`} component={Resume} />
            </Switch>
          </Container>
          <Footer/>
          </Fragment>
          )}
        />
      </div>
      </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
