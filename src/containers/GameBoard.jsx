import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions';
import PropTypes from 'prop-types';

import './GameBoard.css';

import RaisedButton from 'material-ui/RaisedButton';

import StartGame from '../logic/startGame';
import ResetGame from '../logic/resetGame';
import GameOver from '../logic/gameOver';


class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialState: this.props.state.gameReducer,
      challengeNumbersRowCount: [1, 2]
    };

  }

  render() {

    return (
      <div className="gameboard">
        <div className="header">
          <div className="win-count">Win Count: {this.state.initialState.timesOfPlay}</div>
          Pick numbers that sum to the target in 120 seconds
        </div>
        <div className="target">{this.state.initialState.targetNumber}</div>
        <div className="initial-sum">Initial sum : {this.state.initialState.initialSum}</div>
        <div className="challenge-numbers">
          <RaisedButton
            disabled={this.state.initialState.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.state.initialState.numbers[0])}>
            {this.state.initialState.numbers[0]}
          </RaisedButton>
          <RaisedButton
            disabled={this.state.initialState.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.state.initialState.numbers[1])}>
            {this.state.initialState.numbers[1]}
          </RaisedButton>
          <RaisedButton
            disabled={this.state.initialState.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.state.initialState.numbers[2])}>
            {this.state.initialState.numbers[2]}
          </RaisedButton>

        </div>

        <div className="challenge-numbers">
          <RaisedButton
            disabled={this.state.initialState.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.state.initialState.numbers[3])}>
            {this.state.initialState.numbers[3]}
          </RaisedButton>
          <RaisedButton
            disabled={this.state.initialState.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.state.initialState.numbers[4])}>
            {this.state.initialState.numbers[4]}
          </RaisedButton>
          <RaisedButton
            disabled={this.state.initialState.numberButtonDisabled}
            className="number"
            onClick={() => this.numberClick(this.state.initialState.numbers[5])}>
            {this.state.initialState.numbers[5]}
          </RaisedButton>

        </div>
        <div className="footer">
          <div className="timer-value">{this.state.initialState.initialSeconds}</div>
          <RaisedButton className="startbutton" onClick={() => this.startGame()}
            disabled={this.state.initialState.startButtonDisabled}>Start</RaisedButton>
          <RaisedButton className="resetstartbutton" onClick={() => this.resetGame()}
            disabled={this.state.initialState.resetButtonDisabled}>Reset</RaisedButton>
        </div>

      </div>
    );
  }

  numberClick(number) {

    let newState = this.state.initialState;
    newState.initialSum += number;


    if (newState.targetNumber === newState.initialSum) {
      return this.props.gameActions.startGame(StartGame(newState, newState.timesOfPlay + 1));
    }

    if (newState.targetNumber < newState.initialSum) {
      this.gameOver();
    }
    this.props.gameActions.numberClick(number);

    return newState;
  }

  startGame() {
    let newState = this.props.gameActions.startGame(StartGame(this.state.initialState, 0));

    this.startCountDown();

    return newState;

  }


  startCountDown() {
    this.interval = setInterval(() => {
      let newState = this.state.initialState;
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
      let newState = this.state.initialState;
      newState.initialSeconds = 120;
      return this.props.gameActions.startCountDown(newState);
    }, 500);
  }


  gameOver() {
    let newState = this.props.gameActions.gameOver(GameOver(this.state.initialState));

    this.stopCountDown();

    return newState;
  }

  resetGame() {
    let newState = this.props.gameActions.resetGame(ResetGame(this.state.initialState));

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
