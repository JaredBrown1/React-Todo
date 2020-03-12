import React from "react";
import "./Todo.css";

const ToDo = props => {
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={event => props.toggleCompleted(props.item.id)}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default ToDo;
