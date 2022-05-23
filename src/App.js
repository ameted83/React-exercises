import React from "react";
// import Hello from "./Hello";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Hello /> */}
        <InteractiveWelcome />
        <Counter />
        <ClickCounter />
        <ClickTracker />
      </div>
    );
  }
}
