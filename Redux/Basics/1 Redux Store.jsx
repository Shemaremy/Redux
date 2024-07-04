/**
 * Store:
 * 
 * - Variable
 * - Contains current app state  
 * - kept in one separate component
 *
*/




//Ex1: Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.
const reducer = (state = 5) => {
    return state;
  }
const store = Redux.createStore(reducer);



// Ex2: Now retrieve the current state from the store you just created
const currentState = store.getState();






