import React from "react";

export class ClickTracker extends React.Component {
  state = {
    clickButton: null,
  };

  handleClickButton = (event) => {
    this.setState({
      clickButton: event.target.name,
    });
  };

  render() {
    return (
      <div>
        <h1>Click me: {this.state.clickButton} </h1>
        <button onClick={this.handleClickButton} name="button1">
          Button 1
        </button>
        <button onClick={this.handleClickButton} name="button2">
          Button 2
        </button>
        <button onClick={this.handleClickButton} name="button3">
          Button 3
        </button>
      </div>
    );
  }
}
