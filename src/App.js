import React, { Component } from 'react';

import Game from '../src/components/Game';
import './App.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MuiThemeProvider>
          <Game />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
