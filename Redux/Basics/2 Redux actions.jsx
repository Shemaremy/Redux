/*
Actions: JavaScript objects that tell Redux what happened. For ex, like LOGIN action happened.

Think of Redux actions as messengers that deliver information about events happening in your 
app to the Redux store. The store then conducts the business of updating state based on the 
action that occurred.


Action Creators: Functions that create and return action objects. 
They're used to trigger state changes in Redux.

*/


// Ex1:  Declare an object action and give it a property type set to the string 'LOGIN'.
const action = {
    type: 'LOGIN'
  }


//Ex2: Define a function named actionCreator() that returns the action object when called.
const actionCreator = () => {
    return action
  }

