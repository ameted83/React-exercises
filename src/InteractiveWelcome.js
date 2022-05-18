import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {
  state = {
    username: "Amelia",
  };

  render() {
    return (
      <>
        <input name="username" value={this.state.username}></input>
        <Welcome name="Amelia" />
      </>
    );
  }
}

export default InteractiveWelcome;
