import React from "react";

export class TodoList extends React.Component {
  state = {
    strings: ["Life is Beautiful", "It's a nice day", "I'm happy", "I am home"],
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    const inputElement = event.target.elements.todo;
    const newEl = inputElement.value;

    this.setState((state) => {
      return {
        strings: [...state.strings, newEl],
      };
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddTodo}>
          <input name="todo"></input>
          <ul>
            {this.state.strings.map((string) => (
              <li>{string}</li>
            ))}
          </ul>
          <button type="submit">Invio</button>
        </form>
      </>
    );
  }
}
