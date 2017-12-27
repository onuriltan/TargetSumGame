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
    };
    this.randomNumberBetween = this.randomNumberBetween.bind(this);
    this.startGame = this.startGame.bind(this);

  }
  randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  startGame(){
    this.setState({ numbers : [] });
    let targetNumber = _.random(this.state.initialChallengeRange[0], this.state.initialChallengeRange[1]);
    this.setState({ targetNumber: targetNumber });
    let timesToReachTarget = _.random(2, 5);
    this.setState({ timesToReachTarget: timesToReachTarget });

    let tempTargetNumber = targetNumber;
    let generalSum = 0;
    let tempNumbers = [];
    for (let i = 0; i < timesToReachTarget-1; i++) {
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
    this.setState({ numbers : tempNumbers})
  }


  render() {
    return (
      <div className="game">
        <div className="help">
          Pick numbers that sum to the target in {this.state.initialSeconds} seconds
        </div>
        <div className="target">{this.state.targetNumber}</div>
        <div className="challenge-numbers">
          <Number value={this.state.numbers[0]} />
          <Number value={this.state.numbers[1]} />
          <Number value={this.state.numbers[2]} />
        </div>
        <div className="challenge-numbers">
          <Number value={this.state.numbers[3]} />
          <Number value={this.state.numbers[4]} />
          <Number value={this.state.numbers[5]} />
        </div>
        <div className="footer">
          <div className="timer-value">{this.state.initialSeconds}</div>
          <button onClick={this.startGame}>Start</button>
        </div>
      </div>
    );
  }
}



export default Game;