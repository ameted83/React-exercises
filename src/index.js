import ReactDOM from "react-dom";
import { Root } from "./Root";
import "./index.css";
import { store } from "./state/Store";
import { incrementCounter } from "./state/CounterReducer";

const root = document.querySelector("#root");

// ReactDOM.render(<Root />, root);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(5));
