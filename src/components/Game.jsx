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
      randomTargetNumber: 0,
    };
    this.randomNumberBetween = this.randomNumberBetween.bind(this);
    
  }
  randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


  componentDidMount(){
    let randomTargetNumber = _.random(this.state.initialChallengeRange[0], 
                                      this.state.initialChallengeRange[1]);
    this.setState({randomTargetNumber: randomTargetNumber});
  }


  render() {
    return (
      <div className="game">
        <div className="help">
          Pick numbers that sum to the target in {this.state.initialSeconds} seconds
        </div>
        <div className="target">{this.state.randomTargetNumber}</div>
          <div className="challenge-numbers">
           <Number value={13} />
           <Number value={21} />
           <Number value={15} />
          </div>
          <div className="challenge-numbers">
           <Number value={45} />
           <Number value={13} />
           <Number value={43} />
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