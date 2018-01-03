
export default function numberClick(initialState, number) {

    console.log(number);

    let newState = initialState;

    newState.sumToReachTarget = number;

    return newState;

}