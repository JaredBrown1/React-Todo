import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import Tasks from "./components/TodoComponents/TodoList";

const tasks = [
  {
    task: "Sweep floors",
    id: 1,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 2,
    completed: false
  },
  {
    task: "Clean Bathroom",
    id: 3,
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
      todoList: tasks
    };
  }

  addNewTask = newTaskName => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { name: newTaskName, completed: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  toggleComplete = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(task => {
        return !task.completed;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addNewTask={this.addNewTask} />
        </div>
        <Tasks
          tasks={this.state.todoList}
          toggleComplete={this.toggleComplete}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
