import React from "react";
import Hello from "./Hello";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolLogin } from "./UncontrolLogin";

const onLogin = (state) => {
  return console.log(state);
};

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <InteractiveWelcome />
        <Counter />
        <ClickCounter />
        <ClickTracker />
        <Login currentState={onLogin} />
        <UncontrolLogin />
      </div>
    );
  }
}
