
export default function gameOver(initialState) {    
    initialState.startButtonDisabled = false;
    initialState.numberButtonDisabled = true;
    initialState.resetButtonDisabled = true;
    initialState.targetNumber = 'GAME OVER';
    initialState.gameState = 'LOST';

    console.log(initialState.targetNumber);
    return initialState;
  }