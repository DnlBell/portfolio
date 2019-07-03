import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from './components/home';
import Projects from './components/projects';
import Resume from './components/resume';
import AppBar from '@material-ui/core/AppBar';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
          <h1>Header</h1>
          <AppBar position="sticky">
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                <Tab component={Link} to={`/`} label='Home'/>
                <Tab component={Link} to={`/projects`}label='Projects'/>
                <Tab component={Link} to={`/resume`}label='Resume'/>
            </Tabs>
          </AppBar>
          <Switch>
            <Route path={`/`} exact component={Home} />
            <Route path={`/projects`} component={Projects} />
            <Route path={`/resume`} component={Resume} />
          </Switch>
          footer
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
