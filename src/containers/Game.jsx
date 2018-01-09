import React, { Component } from 'react';
import './Game.css';

import GameBoard from '../components/GameBoard';

class Game extends Component {

  render() {
    return (
      <div className="game">
        <GameBoard />
      </div>
    );
  }

}

export default Game;

