import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../../actions/gameActions';
import PropTypes from 'prop-types';

import './GameBoard.css';

import RaisedButton from 'material-ui/RaisedButton';

import { Animated } from "react-animated-css";


import StartGame from '../../logic/startGame';
import ResetGame from '../../logic/resetGame';
import GameOver from '../../logic/gameOver';



class GameBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: this.props.state.gameReducer,
            winCount: 1

        };


    }

    remainingSecondsComponent(remainingCount, gameState) {
        if (gameState === 'STARTED') {

            if (remainingCount < 20 && remainingCount >= 10) {
                return <div className="timer-value" style={{ color: 'red' }}>{remainingCount}</div>
            }

            else if (remainingCount < 10 && remainingCount >= 0) {
                return <Animated className="timer-value" style={{ color: 'red' }} key={remainingCount} animationIn="rubberBand" animationOut="fadeOut" isVisible={true} >
                    {remainingCount}
                </Animated>;
            }
            else {
                return <div className="timer-value">{remainingCount}</div>;
            }

        }

    }
    stageComponent(timesOfPlay) {
        if (timesOfPlay >= 1) {
            return <Animated className="win-count" key={timesOfPlay} animationIn="flip" animationOut="fadeOut" isVisible={true} >
                Stage {timesOfPlay}
            </Animated>
        }
    }

    initialSumComponent(initialSum, targetNumber, gameState) {
        if (gameState === 'LOST') {
            return <div className="initial-sum">Initial sum : {initialSum}, Target number: {targetNumber} </div>

        }else {
            return <div className="initial-sum">Initial sum : {initialSum}</div>

        }

    }





    render() {
        return (
            <div className="gameboard">
                <div className="header">
                    <div className="explanation">Sum the numbers to reach the target</div>

                    {this.stageComponent(this.state.initialState.timesOfPlay)}


                </div>
                <div className="target">{this.state.initialState.targetNumber}</div>
                {this.initialSumComponent(
                    this.state.initialState.initialSum,
                    this.state.initialState.targetNumberForLabel,
                    this.state.initialState.gameState
                )
                }
                <div className="challenge-numbers">
                    <RaisedButton
                        label={this.state.initialState.numbers[0]}
                        backgroundColor={this.state.initialState.isButtonActive[0] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[0], 0)}>
                    </RaisedButton>
                    <RaisedButton
                        label={this.state.initialState.numbers[1]}
                        backgroundColor={this.state.initialState.isButtonActive[1] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[1], 1)}>
                    </RaisedButton>
                    <RaisedButton
                        label={this.state.initialState.numbers[2]}
                        backgroundColor={this.state.initialState.isButtonActive[2] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[2], 2)}>
                    </RaisedButton>

                </div>

                <div className="challenge-numbers">
                    <RaisedButton
                        label={this.state.initialState.numbers[3]}
                        backgroundColor={this.state.initialState.isButtonActive[3] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[3], 3)}>
                    </RaisedButton>
                    <RaisedButton
                        label={this.state.initialState.numbers[4]}
                        backgroundColor={this.state.initialState.isButtonActive[4] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[4], 4)}>
                    </RaisedButton>
                    <RaisedButton
                        label={this.state.initialState.numbers[5]}
                        backgroundColor={this.state.initialState.isButtonActive[5] ? 'red' : 'white'}
                        disabled={this.state.initialState.numberButtonDisabled}
                        className="number"
                        onClick={() => this.numberClick(this.state.initialState.numbers[5], 5)}
                    >

                    </RaisedButton>


                </div>

                {this.remainingSecondsComponent(this.state.initialState.initialSeconds,
                    this.state.initialState.gameState)}

                <div className="footer">
                    <div className="mainbuttons">
                        <RaisedButton
                            label="START"
                            className="startbutton"
                            onClick={() => this.startGame()}
                            disabled={this.state.initialState.startButtonDisabled}>
                        </RaisedButton>
                        <RaisedButton
                            label="RESET"
                            className="resetbutton"
                            onClick={() => this.resetGame()}
                            disabled={this.state.initialState.resetButtonDisabled}>
                        </RaisedButton>

                    </div>
                    <RaisedButton
                        label="Pass"
                        className="passbutton"
                        disabled={this.state.initialState.passButtonDisabled}
                        onClick={() => this.passround()}>
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
        newState.initialSeconds = 60;
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
