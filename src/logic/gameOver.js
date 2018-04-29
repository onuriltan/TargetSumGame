
export default function gameOver(initialState) {    
    initialState.startButtonDisabled = false;
    initialState.numberButtonDisabled = true;
    initialState.resetButtonDisabled = true;
    initialState.isButtonActive = [false, false, false, false, false, false];
    initialState.targetNumber = 'GAME OVER';
    initialState.gameState = 'LOST';

    return initialState;
  }