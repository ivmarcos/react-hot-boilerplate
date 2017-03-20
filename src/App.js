import React, { Component } from 'react';
import Home from './Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: blue600,
  },
  appBar: {
    //height: 50,
    color: blue600
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Home />
  </MuiThemeProvider>
);

export default App;