import { combineReducers, createStore } from "redux";
// import { counterReducer } from "./counterReducer";
import { todosReducer } from "./TodosReducer";

const rootReducer = combineReducers({
  // counter: counterReducer.reducer,
  todos: todosReducer.reducer,
});

export const store = createStore(rootReducer);
