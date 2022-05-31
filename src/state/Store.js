import { createStore } from "redux";
import {
  counterReducer,
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./CounterReducer";

export const store = createStore(counterReducer);
