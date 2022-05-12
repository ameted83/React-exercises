import React from "react";

class Age extends React.Component {
  render() {
    return (
      <>
        {this.props.age > 18 && this.props.age < 65 ? (
          <p>"Your age is: {this.props.age}"</p>
        ) : (
          <p></p>
        )}
      </>
    );
  }
}

/*Age.defaultProps = {
  age: "70",
};*/

export default Age;
