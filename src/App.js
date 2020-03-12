import React from "react";

//components
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";

const data = [
  {
    task: "Learn React",
    id: 1234,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      itemList: data
    };
  }

  addNewItem = newItemName => {
    const newState = {
      ...this.state,
      itemList: [
        ...this.state.itemList,
        { task: newItemName, completed: false, id: Date.now() }
      ]
    };
    console.log("from app.js", newState);
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addNewItem={this.addNewItem} />
        <ToDoList data={this.state.itemList} />
      </div>
    );
  }
}

export default App;
