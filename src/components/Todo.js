import React from "react";
import "./Todo.css";

const ToDo = props => {
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={event => props.toggleCompleted(props.item.id)}
    >
      <h4>{props.item.task}</h4>
    </div>
  );
};

export default ToDo;
