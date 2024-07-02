/**
 * 
 * First, define an action type ADD and set it to a const ADD. Next, define an action creator 
 * addMessage() which creates the action to add a message. You'll need to pass a message to this 
 * action creator and include the message in the returned action.

Then create a reducer called messageReducer() that handles the state for the messages. 
The initial state should equal an empty array. This reducer should add a message to the 
array of messages held in state, or return the current state. Finally, create your Redux 
store and pass it the reducer.

 */

// Step 1: Define Action Type and Action Creator
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  };
};

// Step 2: Create Reducer
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      // Use spread operator to create a new array with the new message added
      return [...state, action.message];
    default:
      return state;
  }
};

// Step 3: Create Redux Store
const { createStore } = Redux;
const store = createStore(messageReducer);
