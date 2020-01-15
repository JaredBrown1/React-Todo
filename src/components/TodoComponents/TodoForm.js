import React from "react";

class todoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  handleChanges = e => {
    this.setState({ ...this.state, newItem: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.newItem);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChanges}
          type="text"
          name="item"
          value={this.state.newItem}
        />
      </form>
    );
  }
}

export default todoForm;
