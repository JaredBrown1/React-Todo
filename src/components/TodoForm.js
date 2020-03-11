import React from "react";

const ToDoForm = props => {
  return (
    <div>
      <form>
        <input type="text" placeholder="task here" />
        <button>Add</button>
        <button>delete</button>
      </form>
    </div>
  );
};

export default ToDoForm;
