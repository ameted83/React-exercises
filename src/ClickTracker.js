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
        <button name="button1" onClick={this.handleClickButton}>
          Button 1
        </button>
        <button name="button2" onClick={this.handleClickButton}>
          Button 2
        </button>
        <button name="button3" onClick={this.handleClickButton}>
          Button 3
        </button>
      </div>
    );
  }
}
