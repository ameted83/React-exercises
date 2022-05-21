import React, { useState, useCallback } from "react";
// import CounterDisplay from "./CounterDisplay";

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const onCounterChange = useCallback(function onCounterChange() {
    setCounter((c) => c + 1);
  }, []);

  const onCounterDecrement = useCallback(function onCounterDecrement() {
    setCounter((c) => c - 1);
  }, []);

  const onCounterReset = useCallback(
    function onCounterReset() {
      setCounter(initialValue);
    },
    [initialValue]
  );

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
