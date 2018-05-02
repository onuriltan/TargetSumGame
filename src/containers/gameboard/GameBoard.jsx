import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../../actions/gameActions';
import PropTypes from 'prop-types';

import './GameBoard.css';

import RaisedButton from 'material-ui/RaisedButton';


import StartGame from '../../logic/startGame';
import ResetGame from '../../logic/resetGame';
import GameOver from '../../logic/gameOver';



class GameBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: this.props.state.gameReducer
        };

    }

    render() {

        return (
            <div className="gameboard">

                <div className="header">
                    <div className="win-count">Stage {this.state.initialState.timesOfPlay}</div>
                    <div className="explanation">Sum the numbers to react the target</div>
                </div>
                <div className="target">{this.state.initialState.targetNumber}</div>
                <div className="initial-sum">Initial sum : {this.state.initialState.initialSum}</div>
                <div className="challenge-numbers">
                    <RaisedButton
                        backgroundColor={this.state.initialState.isButtonActive[0] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[0], 0)}>
                        {this.state.initialState.numbers[0]}
                    </RaisedButton>
                    <RaisedButton
                        backgroundColor={this.state.initialState.isButtonActive[1] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[1], 1)}>
                        {this.state.initialState.numbers[1]}
                    </RaisedButton>
                    <RaisedButton
                        backgroundColor={this.state.initialState.isButtonActive[2] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[2], 2)}>
                        {this.state.initialState.numbers[2]}
                    </RaisedButton>

                </div>

                <div className="challenge-numbers">
                    <RaisedButton
                        backgroundColor={this.state.initialState.isButtonActive[3] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[3], 3)}>
                        {this.state.initialState.numbers[3]}
                    </RaisedButton>
                    <RaisedButton
                        backgroundColor={this.state.initialState.isButtonActive[4] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[4], 4)}>
                        {this.state.initialState.numbers[4]}
                    </RaisedButton>
                    <RaisedButton
                        backgroundColor={this.state.initialState.isButtonActive[5] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[5], 5)}
                    >
                        {this.state.initialState.numbers[5]}
                    </RaisedButton>

                </div>
                <div className="footer">
                    <div className="timer-value">{this.state.initialState.initialSeconds}</div>
                    <div className="mainbuttons">
                        <RaisedButton
                            className="startbutton"
                            onClick={() => this.startGame()}
                            disabled={this.state.initialState.startButtonDisabled}>
                            START
                            </RaisedButton>
                        <RaisedButton
                            className="resetbutton"
                            onClick={() => this.resetGame()}
                            disabled={this.state.initialState.resetButtonDisabled}>
                            RESET
                            </RaisedButton>
                    </div>
                    <RaisedButton
                        className="passbutton"
                        disabled={this.state.initialState.passButtonDisabled}
                        onClick={() => this.passround()}>
                        Pass this round
                        </RaisedButton>
                </div>

            </div>
        );
    }

    passround() {
        let newState = this.state.initialState;
        newState.passButtonDisabled = true;
        this.props.gameActions.startGame(StartGame(newState, newState.timesOfPlay + 1));

    }

    numberClick(number, index) {
        let newState = this.state.initialState;

        if (newState.isButtonActive[index] === false) {
            newState.initialSum = newState.initialSum + number;
            newState.isButtonActive[index] = true;
        }

        else {
            newState.initialSum = newState.initialSum - number;
            newState.isButtonActive[index] = false;
        }

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
        let newState = this.props.gameActions.startGame(StartGame(this.state.initialState, 1));

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
        clearInterval(this.interval);
        let newState = this.state.initialState;
        newState.initialSeconds = 120;
        return this.props.gameActions.startCountDown(newState);
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
