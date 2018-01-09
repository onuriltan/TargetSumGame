import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions';
import PropTypes from 'prop-types';
import _ from 'lodash';


import StartGame from '../logic/startGame';
import ResetGame from '../logic/startGame';


class GameBoard extends Component {

  constructor(props) {
    super(props);

    this.startCountDown = this.startCountDown.bind(this);

  }
  render() {
    return (
      <div className="game">
        <div className="help">
          <div className="timer-value">Win Count: {this.props.state.gameReducer.timesOfPlay}</div>
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
      this.resetGame();
    }
    console.log(newState.sumToReachTarget);
    return newState;
  }

  startGame() {
    let newState;
    newState = this.props.state.gameReducer;
    newState.gameState = 'STARTED';
    newState.startButtonDisabled = true;
    newState.numberButtonDisabled = false;
    newState.resetButtonDisabled = false;
    newState.numbers = [];

    let targetNumber = _.random(newState.initialChallengeRange[0], newState.initialChallengeRange[1]);
    newState.targetNumber = targetNumber;
    let timesToReachTarget = _.random(2, 5);
    newState.timesToReachTarget = timesToReachTarget;

    let tempTargetNumber = targetNumber;
    let generalSum = 0;
    let tempNumbers = [];
    for (let i = 0; i < timesToReachTarget - 1; i++) {
      let number = _.random(1, tempTargetNumber);
      generalSum += number;
      tempNumbers.push(number);
      tempTargetNumber = targetNumber - number;
    }
    let lastNumber = targetNumber - generalSum;
    generalSum += lastNumber;
    tempNumbers.push(lastNumber);

    for (let j = 0; j < 6 - timesToReachTarget; j++) {
      let number = _.random(1, tempTargetNumber);
      tempNumbers.push(number);
    }
    newState.numbers = tempNumbers;

    this.startCountDown();

    return newState;

  }

  startCountDown() {
    this.interval = setInterval(() => {
      let newState = this.props.state.gameReducer;
      newState.initialSeconds = newState.initialSeconds - 1
      return this.props.gameActions.startCountDown(newState);
    }, 1000);
  }

  stopCountDown() {
    setTimeout(() => {
      clearInterval(this.interval);
      let newState = this.props.state.gameReducer;
      newState.initialSeconds = 60;
      return this.props.gameActions.startCountDown(newState);
    }, 500);
  }

  resetGame() {
    let newState = this.props.state.gameReducer;

    newState.startButtonDisabled = false;
    newState.numberButtonDisabled = true;
    newState.resetButtonDisabled = true

    newState.challengeSize = 6;
    newState.initialChallengeRange = [30, 50];
    newState.initialSeconds = 60;
    newState.numbers = [0, 0, 0, 0, 0, 0];
    newState.targetNumber = 0;
    newState.timesToReachTarget = 0;
    newState.timesOfPlay = 0;
    newState.gameState = 'NOT_STARTED';
    newState.sumToReachTarget = 0;
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
