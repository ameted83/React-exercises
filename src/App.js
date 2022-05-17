import React from "react";
import Hello from "./Hello";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolLogin } from "./UncontrolLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";

export class App extends React.Component {
  render() {
    return (
      <>
        <Container title={"My application"}>
          <Hello />
          <InteractiveWelcome />
          <Counter />
          <ClickCounter />
          <ClickTracker />
          <Login />
          <UncontrolLogin />
          <TodoList
            render={(todos, addItem, reset, removeItem) => {
              return (
                <div>
                  <form onSubmit={addItem}>
                    <input name="todo"></input>
                    <button type="submit">Invio</button>
                    <button onClick={reset}>Reset</button>
                  </form>
                  <ul>
                    {todos.map((item, index) => {
                      return (
                        <div>
                          <li>{item}</li>
                          <button onClick={() => removeItem(index)}>X</button>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              );
            }}
          />
        </Container>
      </>
    );
  }
}
