/**
 * combineReducers() in Redux is a function that combines multiple reducer functions into a single 
 * reducer function. It's commonly used to manage different parts of your application's 
 * state separately and make it easier to handle complex state structures in Redux.
 * 
 * For example, in a note-taking app with user authentication, one reducer could handle authentication 
 * while another handles the text and notes that the user is submitting. 
 * For such an application, we might write the combineReducers() method like this:

    const rootReducer = Redux.combineReducers({
    auth: authenticationReducer,
    notes: notesReducer
    });

 */




/*Ex1:  Finish writing the rootReducer() function using the Redux.combineReducers() method. 
Assign counterReducer to a key called count and authReducer to a key called auth.
*/ 

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};


// Define the root reducer here
const rootReducer = Redux.combineReducers({
    count: counterReducer,                      
    auth: authReducer
});

const store = Redux.createStore(rootReducer);