import React from "react";

const Task = props => {
  return (
    <div
      className="tasks"
      onClick={event => props.toggleComplete(props.task.id)}
    >
      <p>{props.task.name}</p>
    </div>
  );
};

export default Task;
