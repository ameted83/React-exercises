import React from "react";
class Welcome extends React.Component {
  render() {
    const name=<strong>{this.props.name}</strong>
    return (
      <>
        <p>
          Welcome, <strong>{this.props.name}</strong>!
        </p>
        <p>Your age is {this.props.age}</p>
      </>
    );
  }
}

Welcome.defaultProps = {
  name: "Amelia",
  age: "39",
};

export default Welcome;
