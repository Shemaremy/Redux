/**
 * 
 * In this lesson, you'll implement a simple counter with Redux from scratch. 
 * The basics are provided in the code editor, but you'll have to fill in the details! 
 * Use the names that are provided and define incAction and decAction action creators, 
 * the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. 
 * Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment 
 * or decrement the state held in the store. Good luck building your first Redux app!
 * 
 */



// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Define action creators
const incAction = () => {
  return {
    type: INCREMENT
  };
};

const decAction = () => {
  return {
    type: DECREMENT
  };
};

// Define the counter reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Define the Redux store
const { createStore } = Redux;
const store = createStore(counterReducer);

// Testing the implementation
store.dispatch(incAction());
console.log(store.getState()); // Should print 1

store.dispatch(incAction());
console.log(store.getState()); // Should print 2

store.dispatch(decAction());
console.log(store.getState()); // Should print 1
