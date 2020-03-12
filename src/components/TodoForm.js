import React from "react";

import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

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
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Label>New Task</Label>
              <Input
                style={{ textAlign: "center" }}
                type="text"
                onChange={this.handleChange}
                value={this.state.newItem}
                name="item"
                placeholder="Task Here"
              />
            </FormGroup>
          </Col>
          <Button>Add</Button>
        </Form>
      </Container>
    );
  }
}

export default ToDoForm;
