import React, { useState } from "react";
// import CounterDisplay from "./CounterDisplay";

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function onCounterChange() {
    setCounter(counter + 1);
  }

  function onCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function onCounterReset() {
    setCounter(initialValue);
  }

  return {
    counter: counter,
    onIncrement: onCounterChange,
    onDecrement: onCounterDecrement,
    onReset: onCounterReset,
  };
}

const Counter = ({ initialValue = 0 }) => {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
      {/* <CounterDisplay count={this.state.count} /> */}
    </div>
  );
};

export default Counter;
