import React, { Component } from 'react';
import configureStore from './store/configureStore';
import Game from '../src/components/Game';

class App extends Component {
  render() {
    return(
    <Game 
    challengesize={6} 
    initialChallengeRange={[30, 50]} 
    initialSeconds={60}
    />
    );
  }
}

export default App;
