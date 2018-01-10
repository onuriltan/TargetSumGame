import _ from 'lodash';

export default function startGame(initialState, sumToReachTarget, timesOfPlay){
        let newState;
        newState = initialState;
        newState.gameState = 'STARTED';
        newState.startButtonDisabled = true;
        newState.numberButtonDisabled = false;
        newState.resetButtonDisabled = false;
        newState.numbers = [];
        newState.sumToReachTarget = sumToReachTarget;
        newState.timesOfPlay = timesOfPlay;

    
        let targetNumber = _.random(newState.initialChallengeRange[0]*(timesOfPlay+0,2), newState.initialChallengeRange[1]*(timesOfPlay+0,2));
        newState.targetNumber = targetNumber;
        let timesToReachTarget = _.random(2, 5);
        newState.timesToReachTarget = timesToReachTarget;
    
        let tempTargetNumber = targetNumber;
        let generalSum = 0;
        let tempNumbers = [];
        for (let i = 0; i < timesToReachTarget - 1; i++) {
          let number = _.random(i+1, parseInt(tempTargetNumber/i+1));
          generalSum += number;
          tempNumbers.push(number);
          tempTargetNumber = targetNumber - number;
        }
        let lastNumber = targetNumber - generalSum;
        generalSum += lastNumber;
        tempNumbers.push(lastNumber);
    
        for (let j = 0; j < 6 - timesToReachTarget; j++) {
          let number = _.random(0, tempTargetNumber);
          tempNumbers.push(number);
        }
        newState.numbers = tempNumbers;
        return newState;

}
