import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="Carla" />
        <Counter 
      initialValue: 0,
      incremet: 1,
      timeout: 1000,/>
      </div>
    );
  }
}
