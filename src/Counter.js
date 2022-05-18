import React, { useState } from "react";
// import CounterDisplay from "./CounterDisplay";

const Counter = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleCounterIncrement}>Click</button>
      {/* <CounterDisplay count={this.state.count} /> */}
    </div>
  );
};

export default Counter;
