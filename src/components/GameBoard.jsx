import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions';
import PropTypes from 'prop-types';
import _ from 'lodash';


import Number from './Number';

class GameBoard extends Component {

  render() {
    return (
      <div className="game">
        <div className="help">
          Pick numbers that sum to the target in {this.props.state.gameReducer.initialSeconds} seconds
            </div>
        <div className="target">{this.props.state.gameReducer.targetNumber}</div>
        <div className="challenge-numbers">
          <Number disabled={this.props.state.gameReducer.numberButtonDisabled} numberClick={() => this.props.gameActions.numberClick(this.props.state.gameReducer, this.props.state.gameReducer.numbers[0])} value={this.props.state.gameReducer.numbers[0]} />
          <Number disabled={this.props.state.gameReducer.numberButtonDisabled} numberClick={() => this.props.gameActions.numberClick(this.props.state.gameReducer, this.props.state.gameReducer.numbers[1])} value={this.props.state.gameReducer.numbers[1]} />
          <Number disabled={this.props.state.gameReducer.numberButtonDisabled} numberClick={() => this.props.gameActions.numberClick(this.props.state.gameReducer, this.props.state.gameReducer.numbers[2])} value={this.props.state.gameReducer.numbers[2]} />
        </div>
        <div className="challenge-numbers">
          <Number disabled={this.props.state.gameReducer.numberButtonDisabled} numberClick={() => this.props.gameActions.numberClick(this.props.state.gameReducer, this.props.state.gameReducer.numbers[3])} value={this.props.state.gameReducer.numbers[3]} />
          <Number disabled={this.props.state.gameReducer.numberButtonDisabled} numberClick={() => this.props.gameActions.numberClick(this.props.state.gameReducer, this.props.state.gameReducer.numbers[4])} value={this.props.state.gameReducer.numbers[4]} />
          <Number disabled={this.props.state.gameReducer.numberButtonDisabled} numberClick={() => this.props.gameActions.numberClick(this.props.state.gameReducer, this.props.state.gameReducer.numbers[5])} value={this.props.state.gameReducer.numbers[5]} />
        </div>
        <div className="footer">
          <div className="timer-value">{this.props.state.gameReducer.initialSeconds}</div>
          <button onClick={() => this.startButtonClick()}
            disabled={this.props.state.gameReducer.startButtonDisabled}>Start</button>
          <button onClick={() => this.props.gameActions.resetGame(this.props.state.gameReducer)}
            disabled={this.props.state.gameReducer.resetButtonDisabled}>Reset</button>
        </div>
      </div>
    );
  }

  startButtonClick() {
    this.startGame();

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

    setInterval(() => {
      this.startCountDown();
     }, 1000);

     return newState;

  }

  startCountDown(){
    let newState = this.props.state.gameReducer;
    newState.initialSeconds = newState.initialSeconds - 1
    return this.props.gameActions.startCountDown(newState);
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
