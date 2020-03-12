import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="item" placeholder="task here" />
          <button>Add</button>
          <button>delete</button>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
