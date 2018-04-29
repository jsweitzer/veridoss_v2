import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './main';

const App = () => (
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>
);

class Apps extends Component {
  render() {
    return (
      <App className="App"/>
    );
  }
}

export default App;
