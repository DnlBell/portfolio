import React, { Fragment } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';
import Content from './components/content';


export default function App() {
    return (
      <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>
      <div className="App">
      <Route
          path="/"
          render={({ location }) => (
        <Fragment>
          <Header/>
          <Nav location={location}/>
          <Content/>
          <Footer/>
        </Fragment>
          )}
        />
      </div>
      </MuiThemeProvider>
      </BrowserRouter>
  );
}