/*
Actions: 

- An object 
- contains what happened. For ex, like LOGIN action happened.
- It doesnt send, it only contains
- const action = { type: 'LOGIN'}



Think of Redux actions as messengers that contain information about events happening in your 
app to the Redux store. The store then conducts the business of updating state based on the 
action that occurred by using a reducer.


*/


// Ex1:  Declare an object action and give it a property type set to the string 'LOGIN'.
const action = {
    type: 'LOGIN'
  }


//Ex2: Define a function named actionCreator() that returns the action object when called.
const actionCreator = () => {
    return action
  }

