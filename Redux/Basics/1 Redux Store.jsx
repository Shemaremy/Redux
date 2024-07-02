/**
 * Redux store is a place where your application's entire state is kept in one centralized location.
*/




//Ex1: Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.
const reducer = (state = 5) => {
    return state;
  }
const store = Redux.createStore(reducer);



// Ex2: Now retrieve the current state from the store you just created
const currentState = store.getState();






