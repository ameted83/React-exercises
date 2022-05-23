import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {
  state = {
    username: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;

    this.setState({ username: value });
  };

  render() {
    return (
      <>
        <input
          name="username"
          onChange={this.handleInputChange}
          value={this.state.username}
        ></input>
        <Welcome value={this.state.username} />
      </>
    );
  }
}

export default InteractiveWelcome;
