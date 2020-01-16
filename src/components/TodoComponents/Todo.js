import React from "react";

import "./Todo.css";

const Task = props => {
  return (
    <div
      onClick={event => props.toggleComplete(props.task.id)}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Task;
