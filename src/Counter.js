import React from "react";

class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.incremet,
      });
    }, this.props.timeout);
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   initialValue: 0,
//   incremet: 1,
//   timeout: 1000,
// };

export default Counter;
