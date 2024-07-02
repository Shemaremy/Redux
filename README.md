# Redux
Learning Redux


## TO KNOW
## --------

1. What is Redux
2. Why use it 
3. Getting started, what's required to start  with it
4. Keyterms to know in Redux








### 1. What is Redux
--------------------
- Redux is a state management React framework
- It helps manage the state of your application in a consistent and predictable way







### 2. Why use it ?
--------------------
Let's take a simple example that we experienced in our previous e-commerce website project. For example, we have 10 components each with products, and you want that each item from any component that when add to cart is clicked, the nbr of items above on the label increase due to the usestate. In order for each component to access the usestate hook, we will make a global file that will manage the state of the items being added. Redux does it then. 

- Redux in this scenario will create a redux store to define and be in charge to update cart items. Whenever any component may need to inform the store that the cart has an additional item, we access the global store named redux store






### 3. Getting started
-----------------------

1. Install redux : npm install redux react-redux
2. Then use it. For more, explore the folders



























### 4. Redux keywords to know 
------------------------------

1. Store: A place where your application's entire state is kept in one centralized location.

2. State: The current data that represents how your application looks and behaves at any point in time.

3. Actions: JavaScript object that tell Redux what happened. Action types like LOGIN, LOGOUT, ...

4. Action Creators: Functions that create and return action objects. They're used to trigger state changes in Redux.

5. Dispatch: A function used to send actions to the Redux store to update the state.

6. Reducers:  a function that update the application's state based on the type of action received. They take the current state and an action as input, then produce a new state as output. 
Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new copy of state and never modify state directly.

7. Selectors: Functions to retrieve specific pieces of data from the state.

8. Middleware: Functions that let you customize Redux's behavior. They're used for things like logging actions or handling asynchronous operations.

9. Thunk: A type of Redux middleware that allows action creators to return functions instead of action objects. Useful for async logic.

10. Store Enhancers: Functions that add extra functionality to the Redux store, like middleware or DevTools integration.

11. Combined Reducers: Combines multiple reducers into one root reducer to manage different parts of the state tree.

12. DevTools: Tools to inspect and debug Redux apps, showing actions and state changes.

13. Immutable State: The principle of not directly changing the state, but returning new copies when updating it.

14. Normalization: Structuring the state to reduce duplication and make updates more efficient, often using dictionaries.

15. Rehydration: Loading the state from storage (like local storage) when the app starts, to restore previous state.

16. Persist: Techniques or libraries to save and restore Redux state across app sessions.

