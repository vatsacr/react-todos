import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  isCompleted = () => {
    return {
      backgroundColor: "#ededed",
      padding: "1em",
      border: "1px solid #ccc",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.isCompleted()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markDone.bind(this, id)}
          />
          {title}
          <button
            style={btnStyle}
            onClick={this.props.deleteTask.bind(this, id)}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  backgroundColor: "#ff5030",
  color: "#ffffff",
  padding: "8px",
  float: "right",
  border: "none",
  borderRadius: "5px",
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItem;
