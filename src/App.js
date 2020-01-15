import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: ""
    };
  }

  addNewTask = newItemName => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { name: newItemName, completed: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  toggleComplete = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      groceryList: this.state.todoList.filter(item => {
        return !item.completed;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
