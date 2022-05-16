import React from "react";
import Age from "./Age";
class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>
          Welcome, <strong>{this.props.name}</strong>!
        </p>
        {/* <p>Your age is: {this.props.age}</p> */}
        {this.props.age > 18 &&
        this.props.age < 65 &&
        this.props.name === "John" ? (
          <Age age={this.props.age} name={this.props.name} />
        ) : (
          false
        )}
      </>
    );
  }
}

Welcome.defaultProps = {
  name: "Amelia",
  // age: "39",
};

export default Welcome;
