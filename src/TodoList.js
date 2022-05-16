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

  handleClickReset = () => {
    this.setState(() => {
      return { todos: [] };
    });
  };

  handleRemoveItem = (event) => {
    event.preventDefault();
    this.setState(() => {
      return { todo: this.state.todos.pop() };
    });
  };

  render() {
    return (
      <>
        <h3>My todoList</h3>
        <form onSubmit={this.handleAddTodo}>
          <input name="todo"></input>
          <ul>
            {this.state.todos.map((todo, index) => (
              <li key={index}>
                {todo},<button onClick={this.handleRemoveItem}>X</button>
              </li>
            ))}
          </ul>
          <button type="submit">Invio</button>
          <button onClick={this.handleClickReset}>Reset</button>
        </form>
      </>
    );
  }
}
