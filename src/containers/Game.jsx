import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions';
import PropTypes from 'prop-types';
import './Game.css';

import GameBoard from '../components/GameBoard';

class Game extends Component {
  
  componentWillMount(){
    console.log(this.props.state.gameReducer)
  }

  render() {
    return (
      <div className="game">
        <GameBoard startGame={this.props.gameActions.startGame}
                   resetGame={this.props.gameActions.resetGame}
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

