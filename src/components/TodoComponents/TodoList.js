// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Task from "../TodoComponents/Todo";

const Tasks = props => {
  return (
    <div>
      {props.tasks.map(task => (
        <Task key={task.id} task={task} toggleComplete={props.toggleComplete} />
      ))}
      <button onClick={props.clearCompleted}>Clear Tasks</button>
    </div>
  );
};

export default Tasks;
