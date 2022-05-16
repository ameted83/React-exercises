import React from "react";

class Age extends React.Component {
  render() {
    return (
      <>
        <div>
          <p>Name is: {this.props.name}</p>
          <p>Your age is: {this.props.age}</p>
        </div>
      </>
    );
  }
}

/*Age.defaultProps = {
  age: "70",
};*/

export default Age;
