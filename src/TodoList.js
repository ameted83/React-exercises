import React from "react";

export class TodoList extends React.Component {
  state = {
    newNames: [...this.props.names],
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    const inputElement = event.target.elements.todo;
    const newEl = inputElement.value;
    inputElement.value = "";
    this.setState((state) => {
      return {
        newNames: [...state.newNames, newEl],
      };
    });
  };
  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleAddTodo}>
            <input name="todo"></input>
            <button type="submit">Invio</button>
          </form>
          <ul>
            {this.state.newNames.map((name) => (
              <li>{name}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
