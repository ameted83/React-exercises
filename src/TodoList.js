import React from "react";

export class TodoList extends React.Component {
  state = {
    todos: ["Studio React", "Vado a fare una passeggiata", "Leggo un libro"],
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    const inputItem = event.target.elements.todo;
    const newItem = inputItem.value;

    this.setState((state) => {
      return {
        todos: [...state.todos, newItem],
      };
    });
  };

  render() {
    return (
      <>
        <h3>My TodoList</h3>
        <form onSubmit={this.handleAddTodo}>
          <input name="todo"></input>
          <ul>
            {this.state.todos.map((todo) => (
              <li>{todo}</li>
            ))}
          </ul>
          <button type="submit">Invio</button>
        </form>
      </>
    );
  }
}
