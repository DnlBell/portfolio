import React, { Fragment } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import Header from './components/header';
import Nav from './components/nav';
import Content from './components/content';
import ScrollToTop from './ScrollToTop';

export default function App() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <MuiThemeProvider theme={muiTheme}>
            <div className="App">
            <Route
                path="/"
                render={({ location }) => (
              <Fragment>
                <Header/>
                <Nav location={location}/>
                <Content/>
              </Fragment>
                )}
              />
            </div>
          </MuiThemeProvider>
        </ScrollToTop>
      </BrowserRouter>
  );
};