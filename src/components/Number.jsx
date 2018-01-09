import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions';
import PropTypes from 'prop-types';

import StartGame from '../logic/startGame';
import ResetGame from '../logic/startGame';


class Number extends Component {

  render() {
    return <button
      disabled={this.props.state.gameReducer.numberButtonDisabled}
      className="number"
      onClick={() => this.numberClick(this.props.value)}>
      {this.props.value}
    </button>;
  }

  numberClick(number) {
    let newState = this.props.state.gameReducer;
    newState.sumToReachTarget += number;
    if (newState.targetNumber === newState.sumToReachTarget) {
      return this.props.gameActions.startGame(StartGame(newState, 0, newState.timesOfPlay + 1));
    }

    if (newState.targetNumber < newState.sumToReachTarget) {
      return this.props.gameActions.resetGame(ResetGame(newState));
    }
    console.log(newState.sumToReachTarget);
    return newState;
  }

}

Number.propTypes = {
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
)(Number);