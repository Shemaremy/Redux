/**
 * 
 * A common practice when working with Redux is to assign action types as read-only constants, 
 * then reference these constants wherever they are used. You can refactor the code you're working
 *  with to write the action types as const declarations.
 * 
 */


/**
 * Ex1: Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT',
 *  respectively. Then, edit the authReducer() and the action creators to reference these constants
 *  instead of string values.
 */


const LOGIN = 'LOGIN';              // After using this, we will now use the variable names to call types
const LOGOUT = 'LOGOUT';

const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
  
    switch (action.type) {
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
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: LOGIN
    }
  };
  
  const logoutUser = () => {
    return {
      type: LOGOUT
    }
  };