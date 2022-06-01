import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { todosReducer } from "./todosReducer";

const rootReducer = combineReducers({
  counter: counterReducer.reducer,
  todos: todosReducer.reducer,
});

export const store = createStore(rootReducer);
