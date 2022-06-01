import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterReducer";
import { todosReducer } from "./todosReducer";

const rootReducer = combineReducers({
  counter: counterReducer.reducer,
  todos: todosReducer.reducer,
});

export const store = configureStore({ reducer: rootReducer });
