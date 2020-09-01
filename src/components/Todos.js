import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        todo={todo}
        key={todo.id}
        markDone={this.props.markDone}
        deleteTask={this.props.deleteTask}
      />
    ));
  }
}

// Interface like property
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Todos;
