/**
 * Create a function mapStateToProps(). This function should take state as an argument, 
 * then return an object which maps that state to specific property names. These properties
 *  will become accessible to your component via props. Since this example keeps the entire 
 * state of the app in a single array, you can pass that entire state to your component. Create 
 * a property messages in the object that's being returned, and set it to state.
 * 
 */


const state = [];

// Change code below this line
// Define mapStateToProps function
const mapStateToProps = (state) => {
  return {
    messages: state // maps the entire state to a 'messages' property
  };
};
