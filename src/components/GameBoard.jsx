import React, { Component } from 'react';

import Number from './Number';

class GameBoard extends Component {

  render() {
    return (
      <div className="game">
        <div className="help">
          Pick numbers that sum to the target in {this.props.initialState.initialSeconds} seconds
            </div>
        <div className="target">{this.props.initialState.targetNumber}</div>
        <div className="challenge-numbers">
          <Number numberClick={() => this.props.numberClick(this.props.initialState, this.props.initialState.numbers[0])} value={this.props.initialState.numbers[0]} />
          <Number numberClick={() => this.props.numberClick(this.props.initialState, this.props.initialState.numbers[1])} value={this.props.initialState.numbers[1]} />
          <Number numberClick={() => this.props.numberClick(this.props.initialState, this.props.initialState.numbers[2])} value={this.props.initialState.numbers[2]} />
        </div>
        <div className="challenge-numbers">
          <Number numberClick={() => this.props.numberClick(this.props.initialState, this.props.initialState.numbers[3])} value={this.props.initialState.numbers[3]} />
          <Number numberClick={() => this.props.numberClick(this.props.initialState, this.props.initialState.numbers[4])} value={this.props.initialState.numbers[4]} />
          <Number numberClick={() => this.props.numberClick(this.props.initialState, this.props.initialState.numbers[5])} value={this.props.initialState.numbers[5]} />
        </div>
        <div className="footer">
          <div className="timer-value">{this.props.initialState.initialSeconds}</div>
          <button onClick={() => this.props.startGame(this.props.initialState)}>Start</button>
          <button onClick={() => this.props.resetGame(this.props.initialState)}>Reset</button>
        </div>
      </div>
    );
  }

}


export default GameBoard;
