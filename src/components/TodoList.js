// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import ToDo from "./Todo";

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
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default ToDoList;
