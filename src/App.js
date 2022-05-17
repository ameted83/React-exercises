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
        <Container>
          <Hello />
          <InteractiveWelcome />
          <Counter />
          <ClickCounter />
          <ClickTracker />
          <Login />
          <UncontrolLogin />
          <TodoList />
        </Container>
      </>
    );
  }
}
