import ReactDOM from "react-dom";
import { Root } from "./Root";
import "./index.css";
import { store } from "./state/Store";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "./state/CounterReducer";

const root = document.querySelector("#root");

// ReactDOM.render(<Root />, root);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(5));
store.dispatch(decrementCounter(3));
store.dispatch(decrementCounter(6));
store.dispatch(resetCounter());
