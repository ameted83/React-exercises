import React from "react";

export class TodoList extends React.Component {
  state = {
    todos: ["Studio React", "Vado a fare una passeggiata", "Leggo un libro"],
    todo: "",
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    const inputItem = event.target.elements.todo;
    const newItem = inputItem.value;
    inputItem.value = "";

    this.setState((state) => {
      return {
        todos: [...state.todos, newItem],
      };
    });
  };

  handleClickReset = (event) => {
    event.preventDefault();
    this.setState(() => {
      return { todos: [] };
    });
  };

  handleRemoveItem = () => {
    this.setState(() => {
      return { todo: this.state.todos.pop() };
    });
  };

  render() {
    return (
      <>
        <h3>My todoList</h3>
        {this.props.render(
          this.state.todos,
          this.handleAddTodo,
          this.handleClickReset,
          this.handleRemoveItem
        )}
      </>
    );
  }
}
