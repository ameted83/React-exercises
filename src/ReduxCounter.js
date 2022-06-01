import { useSelector, useDispatch } from "react-redux";
import { counterReducer } from "./states/counterReducer";

export function ReduxCounter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function handleCounterIncrement() {
    dispatch(counterReducer.actions.increment(1));
  }

  function handleCounterDecrement() {
    dispatch(counterReducer.actions.decrement(1));
  }

  function handleCounterReset() {
    dispatch(counterReducer.actions.reset());
  }

  return (
    <>
      <h3>Current value:{counter}</h3>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </>
  );
}
