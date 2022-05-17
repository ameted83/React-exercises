import React from "react";
import Message from "./Message";

class Hello extends React.Component {
  render() {
    return (
      <>
        <h2>Hello, World!</h2>
        <Message />
      </>
    );
  }
}

export default Hello;
