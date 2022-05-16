import React from "react";
import Age from "./Age";
class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <p>
          Welcome, <strong>{this.props.name}</strong>!
        </p>
        {/* <p>Your age is: {this.props.age}</p> */}
        <Age age={this.props.age ? this.props.age : false} />
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Amelia",
  age: "39",
};

export default Welcome;
