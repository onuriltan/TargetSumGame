import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions';
import PropTypes from 'prop-types';

import StartGame from '../logic/startGame';
import ResetGame from '../logic/resetGame';
import GameOver from '../logic/gameOver';


class GameBoard extends Component {

 
  render() {
    return (
      <div className="game">
        <div className="help">
          <div className="win-count">Win Count: {this.props.state.gameReducer.timesOfPlay}</div>
          Pick numbers that sum to the target in {this.props.state.gameReducer.initialSeconds} seconds
        </div>
        <div className="target">{this.props.state.gameReducer.targetNumber}</div>
        <div className="challenge-numbers">
          <button
            disabled={this.props.state.gameReducer.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.props.state.gameReducer.numbers[0])}>
            {this.props.state.gameReducer.numbers[0]}
          </button>
          <button
            disabled={this.props.state.gameReducer.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.props.state.gameReducer.numbers[1])}>
            {this.props.state.gameReducer.numbers[1]}
          </button>
          <button
            disabled={this.props.state.gameReducer.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.props.state.gameReducer.numbers[2])}>
            {this.props.state.gameReducer.numbers[2]}
          </button>

        </div>

        <div className="challenge-numbers">
          <button
            disabled={this.props.state.gameReducer.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.props.state.gameReducer.numbers[3])}>
            {this.props.state.gameReducer.numbers[3]}
          </button>
          <button
            disabled={this.props.state.gameReducer.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.props.state.gameReducer.numbers[4])}>
            {this.props.state.gameReducer.numbers[4]}
          </button>
          <button
            disabled={this.props.state.gameReducer.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.props.state.gameReducer.numbers[5])}>
            {this.props.state.gameReducer.numbers[5]}
          </button>

        </div>
        <div className="footer">
          <div className="timer-value">{this.props.state.gameReducer.initialSeconds}</div>
          <button onClick={() => this.startGame()}
            disabled={this.props.state.gameReducer.startButtonDisabled}>Start</button>
          <button onClick={() => this.resetGame()}
            disabled={this.props.state.gameReducer.resetButtonDisabled}>Reset</button>
        </div>

      </div>
    );
  }


  numberClick(number) {
    let newState = this.props.state.gameReducer;
    newState.sumToReachTarget += number;

    if (newState.targetNumber === newState.sumToReachTarget) {
      return this.props.gameActions.startGame(StartGame(newState, 0, newState.timesOfPlay + 1));
    }

    if (newState.targetNumber < newState.sumToReachTarget) {
      this.gameOver();
    }
    console.log(newState.sumToReachTarget);
    return newState;
  }

  startGame() {
    let newState = this.props.gameActions.startGame(StartGame(this.props.state.gameReducer, 0, 0));

    this.startCountDown();

    return newState;

  }


  startCountDown() {
    this.interval = setInterval(() => {
      let newState = this.props.state.gameReducer;
      newState.initialSeconds = newState.initialSeconds - 1
      if (newState.initialSeconds === 0) {
        this.gameOver();
      }
      return this.props.gameActions.startCountDown(newState);
    }, 1000);
  }

  stopCountDown() {
    setTimeout(() => {
      clearInterval(this.interval);
      let newState = this.props.state.gameReducer;
      newState.initialSeconds = 120;
      return this.props.gameActions.startCountDown(newState);
    }, 500);
  }


  gameOver() {
    let newState = this.props.gameActions.gameOver(GameOver(this.props.state.gameReducer));

    this.stopCountDown();

    return newState;
  }

  resetGame() {
    let newState = this.props.gameActions.resetGame(ResetGame(this.props.state.gameReducer));

    this.stopCountDown();
    return newState;
  }
}

GameBoard.propTypes = {
  gameActions: PropTypes.object,
  initialState: PropTypes.object
};

function mapStateToProps(state) {
  return { state: state };
}

function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
