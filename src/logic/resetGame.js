
export default function resetGame(initialState) {

    let newState = initialState;

    newState.challengeSize = 6;
    newState.initialChallengeRange = [30, 50];
    newState.initialSeconds = 60;
    newState.numbers = [0, 0, 0, 0, 0, 0];
    newState.targetNumber = 0;
    newState.timesToReachTarget = 0;
    newState.timesOfPlay = 0;
    newState.gameState = 'NOT_STARTED';
    newState.sumToReachTarget = 0;

    return newState;



}