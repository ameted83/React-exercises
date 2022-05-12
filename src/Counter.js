import React from "react";
import CounterDisplay from "./CounterDisplay";

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
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

Counter.defaultProps = {
  initialValue: 0,
  incremet: 1,
  timeout: 1000,
};

export default Counter;
