import React, { Component } from 'react';

import GameBoard from '../containers/GameBoard';

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

