/**
 * 
 * Write both dispatches in the handleAsync() action creator. Dispatch requestingData() 
 * before the setTimeout() (the simulated API call). Then, after you receive the (pretend) 
 * data, dispatch the receivedData() action, passing in this data. Now you know how to handle 
 * asynchronous actions in Redux. Everything else continues to behave as before.
 * 
 */







const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    //dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      dispatch(receivedData(data));

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
    switch(action.type) {
        case REQUESTING_DATA:
          return {
            ...state,
            fetching: true // Update fetching to true when requesting data
          };
        case RECEIVED_DATA:
          return {
            ...state,
            fetching: false, // Update fetching to false when data is received
            users: action.users // Update users with received data
          };
        default:
          return state;
      }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

// Dispatch the asynchronous action
store.dispatch(handleAsync());

// Verify initial state
console.log(store.getState());