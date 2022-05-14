import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

export class App extends React.Component {
  render() {
    const name=<strong>{this.props.name}</strong>
    return (
      <div>
        <Hello />
        <Welcome name={name} />
      </div>
    );
  }
}
