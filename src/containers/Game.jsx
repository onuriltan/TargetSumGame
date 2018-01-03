import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions';
import PropTypes from 'prop-types';
import './Game.css';

import GameBoard from '../components/GameBoard';

class Game extends Component {

  render() {//add resetgame to gameboard
    console.log(this.props.state.gameReducer)
    return (
      <div className="game">
        <GameBoard 
            startGame={(state) => this.props.gameActions.startGame(state)}
            resetGame={(state) => this.props.gameActions.resetGame(state)}
            initialState={this.props.state.gameReducer}       
        />
      </div>
    );
  }

}

Game.propTypes = {
  gameActions: PropTypes.object,
  initialState: PropTypes.object
};

function mapStateToProps(state) {
  console.log("mapStateToProps= ",state)
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
)(Game);

