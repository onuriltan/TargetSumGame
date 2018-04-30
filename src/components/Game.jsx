import React, { Component } from 'react';

import GameBoard from '../containers/gameboard/GameBoard';

import './Game.css'

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

