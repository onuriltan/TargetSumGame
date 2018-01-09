import _ from 'lodash';

export default function startGame(initialState, sumToReachTarget){
        let newState;
        newState = initialState;
        newState.gameState = 'STARTED';
        newState.startButtonDisabled = true;
        newState.numberButtonDisabled = false;
        newState.resetButtonDisabled = false;
        newState.numbers = [];
        newState.sumToReachTarget = sumToReachTarget;
    
        let targetNumber = _.random(newState.initialChallengeRange[0], newState.initialChallengeRange[1]);
        newState.targetNumber = targetNumber;
        let timesToReachTarget = _.random(2, 5);
        newState.timesToReachTarget = timesToReachTarget;
    
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
        newState.numbers = tempNumbers;
        return newState;

}
