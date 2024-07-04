/**
 * 
 * 
 * Reducer:
 * 
 * - A function with 2 arguments always (state and action)
 * - It only updates the state based on action done
 * 
 * 
 * 
 * 
 * After an action is created and dispatched, the Redux store needs to know how to respond to that action. 
 * This is the job of a reducer function. Reducers in Redux are responsible for the state modifications 
 * that take place in response to actions. A reducer takes state and action as arguments, 
 * and it always returns a new state. It is important to see that this is the only role of the reducer. 
 * It has no side effects — it never calls an API endpoint and it never has any hidden surprises. 
 * The reducer is simply a pure function that takes state and action, then returns new state.
 * 
 */





/* Ex1:  Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' 
it returns a state object with login set to true. Otherwise, it returns the current state. 
Note that the current state and the dispatched action are passed to the reducer, so you can access 
the action's type directly with action.type.
*/ 


const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: true
            }
        default:
            return state
    } 
    // Change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };