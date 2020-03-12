// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import styled from "styled-components";

import ToDo from "./Todo";

const Button = styled.button`
  :hover {
    background-color: red;
  }
`;

const ToDoList = props => {
  return (
    <div>
      {props.data.map(item => {
        return (
          <ToDo
            toggleCompleted={props.toggleCompleted}
            key={item.id}
            item={item}
          />
        );
      })}
      <Button onClick={props.clearCompleted}>Clear Completed</Button>
    </div>
  );
};

export default ToDoList;
