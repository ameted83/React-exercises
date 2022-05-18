import React, { useEffect, useState } from "react";
// import CounterDisplay from "./CounterDisplay";

const Counter = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`The counter is now ${counter}`);
  }, [counter]);

  function onCounterChange() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onCounterChange}>Click</button>
      {/* <CounterDisplay count={this.state.count} /> */}
    </div>
  );
};

export default Counter;
