import React from "react";
import { ReduxCounter } from "./ReduxCounter";
// import Age from "./Age";
export function Welcome(props) {
  return (
    <div className="welcome">
      <p>
        Welcome, <strong>{props.name}</strong>!
      </p>
      <ReduxCounter />
      {/* <p>Your age is: {this.props.age}</p> */}
      {/* <Age age={this.props.age ? this.props.age : false} /> */}
    </div>
  );
}

// Welcome.defaultProps = {
//   name: "Amelia",
//   age: "39",
// };

export default Welcome;
