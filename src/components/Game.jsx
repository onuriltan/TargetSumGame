import React, { Component } from 'react';
import '../components/Game.css';
import _ from 'lodash';

import Number from '../components/Number';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      challengeSize: props.challengeSize,
      initialChallengeRange: props.initialChallengeRange,
      initialSeconds: props.initialSeconds,
      numbers: [0, 0, 0, 0, 0, 0],
      targetNumber: 0,
      timesToReachTarget: 0,
      timesOfPlay: 0,
      gameState: 'NOT_STARTED',
      sumToReachTarget: 0

    };
    this.randomNumberBetween = this.randomNumberBetween.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.numberAction = this.numberAction.bind(this);

  }


  render() {
    return (
      <div className="game">
        <div className="help">
          Pick numbers that sum to the target in {this.state.initialSeconds} seconds
        </div>
        <div className="target">{this.state.targetNumber}</div>
        <div className="challenge-numbers">
          <Number onClick= {this.numberAction(this.state.numbers[0])} value={this.state.numbers[0]} />
          <Number onClick= {this.numberAction(this.state.numbers[1])} value={this.state.numbers[1]} />
          <Number onClick= {this.numberAction(this.state.numbers[2])} value={this.state.numbers[2]} />
        </div>
        <div className="challenge-numbers">
          <Number onClick= {this.numberAction(this.state.numbers[3])} value={this.state.numbers[3]} />
          <Number onClick= {this.numberAction(this.state.numbers[4])} value={this.state.numbers[4]} />
          <Number onClick= {this.numberAction(this.state.numbers[5])} value={this.state.numbers[5]} />
        </div>
        <div className="footer">
          <div className="timer-value">{this.state.initialSeconds}</div>
          <button onClick={this.startNewGame}>Start</button>
          <button onClick={this.resetGame}>Reset</button>

        </div>
      </div>
    );
  }

  randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  startNewGame() {
    this.setState({ gameState: 'STARTED' });
    this.setState({ numbers: [] });
    let targetNumber = _.random(this.state.initialChallengeRange[0], this.state.initialChallengeRange[1]);
    this.setState({ targetNumber: targetNumber });
    let timesToReachTarget = _.random(2, 5);
    this.setState({ timesToReachTarget: timesToReachTarget });

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
    this.setState({ numbers: tempNumbers })
  }

  resetGame() {
    this.setState({
      challengeSize: this.props.challengeSize,
      initialChallengeRange: this.props.initialChallengeRange,
      initialSeconds: this.props.initialSeconds,
      numbers: [0, 0, 0, 0, 0, 0],
      targetNumber: 0,
      timesToReachTarget: 0,
      timesOfPlay: 0,
      gameState: 'NOT_STARTED',
      sumToReachTarget: 0
    });
  }

  numberAction(number) {
    console.log(number);
  }

}



export default Game;