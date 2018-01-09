
export default function numberClick(initialState, number) {
    let newState = initialState;
    newState.sumToReachTarget = number;
    
    return newState;

}