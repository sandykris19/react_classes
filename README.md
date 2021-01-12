# Converting a function to class

**Step 1:** Create a ES6 class, with the same name that extends React.component

**Step 2:** Add empty render() method and move body of fucntion to render method.

**Step 3:** Replace props with this.props in the return body.

## Adding lifecycle methods to classes

In application with complex and many components, it is very important to free up resources when components are destroyed.

Like example, when we want to set a timer on Clock component once it got rendered to the DOM for the first time. this is called **Mounting** stage.

We also want to clear that timer once it destroyed this is called unmounting stage.

React provided lifecycle methods for both the stages.

componentDidMount() : this is where you can set timers, or fetching data from server etc

componentWillUnmount(): this is where you can clear timers or other event listeners.

#   r e a c t _ c l a s s e s  
 