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
      numbers: [],
      randomTargetNumber: 0,
      randomSubsetSum: 0,
      generalSum: 0
    };
    this.randomNumberBetween = this.randomNumberBetween.bind(this);

  }
  randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


  componentDidMount() {
    let randomTargetNumber = _.random(this.state.initialChallengeRange[0], this.state.initialChallengeRange[1]);
    
    let randomSubsetSum = _.random(2, 6);
    this.setState({ randomSubsetSum: randomSubsetSum });

    let generalSum = 0;
    let tempRandomTargetNumber = randomTargetNumber;
    for (let i = 0; i < randomSubsetSum-1; i++) {
      let number = _.random(0, tempRandomTargetNumber);
      generalSum += number;
      this.setState({ generalSum: generalSum });
      this.setState({ numbers: [...this.state.numbers, number]});
      tempRandomTargetNumber = randomTargetNumber - number;
    }
    let lastNumber = randomTargetNumber - generalSum;
    generalSum += lastNumber;
    this.setState({ generalSum: generalSum });
    this.setState({ numbers: [...this.state.numbers, lastNumber]});
    
    for (let j = 0; j < 6 - randomSubsetSum; j++) {
      let number = _.random(0, tempRandomTargetNumber);
      this.setState({ numbers: [...this.state.numbers, number]});
    }
    this.setState({ randomTargetNumber: randomTargetNumber });
    this.setState({ randomSubsetSum: randomSubsetSum });
  }


  render() {
    return (
      <div className="game">
        <div className="help">
          Pick numbers that sum to the target in {this.state.initialSeconds} seconds
        </div>
        <div className="target">{this.state.randomTargetNumber}</div>
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
          <button>Start</button>
        </div>
      </div>
    );
  }


}
export default Game;