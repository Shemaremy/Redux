/**
 * 
 * Say you are managing user authentication in your Redux store. You want to have a state representation
 *  for when users are logged in and when they are logged out. You represent this with a single state
 *  object with the property authenticated. You also need action creators that create actions corresponding
 *  to user login and user logout, along with the action objects themselves.
 * 
 */




/**
 * 
 * Ex1: Fill in the reducer function to handle multiple authentication actions. 
 * Use a JavaScript switch statement in the reducer to respond to different action events. 
 * This is a standard pattern in writing Redux reducers. The switch statement should switch 
 * over action.type and return the appropriate authentication state. 
 * 
 */


const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                authenticated: true
            }
        
        case 'LOGOUT':
            return {
                ...state,
                authenticated: false
            }
        
        default:
            return state
    }
  
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };