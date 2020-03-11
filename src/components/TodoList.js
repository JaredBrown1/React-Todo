// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import ToDoForm from "./TodoForm";
import ToDo from "./Todo";

const ToDoList = props => {
  return (
    <div>
      <ToDo task={props.task} />
      <ToDoForm />
    </div>
  );
};

export default ToDoList;
