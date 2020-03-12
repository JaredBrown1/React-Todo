import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  handleChange = e => {
    this.setState({ ...this.state, newItem: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.newItem);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newItem}
            name="item"
            placeholder="task here"
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
