/*
*
Dispatch: 
 - A function 
 - Sends actions to the store
 - It only sends, it doesnt update
*
*/



// Ex1: Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass 
//      in the action created by loginAction().

const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action below:
  store.dispatch(loginAction())
