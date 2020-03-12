import React from "react";
import styled from "styled-components";

//components
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";

//styles
const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  background-color: #d6d6d6;
  max-width: 800px;
`;

const Title = styled.h2`
  background-color: black;
  color: oldlace;
`;

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

  toggleCompleted = id => {
    const newState = {
      ...this.state,
      itemList: this.state.itemList.map(item => {
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
      itemList: this.state.itemList.filter(item => {
        return !item.completed;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <Container>
        <Title>My Todo List</Title>
        <ToDoForm addNewItem={this.addNewItem} />
        <ToDoList
          data={this.state.itemList}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </Container>
    );
  }
}

export default App;
