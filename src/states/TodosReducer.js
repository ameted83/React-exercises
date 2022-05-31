import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

export const todosReducer = createSlice({
  name: "todos",
  id: nanoid(),
  title: "Ho letto un libro",
  initialState: [],

  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },

    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),

    edit: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload.data };
        }

        return todo;
      });
    },
  },
});

// const defaultState = [];

// const ADD = "TODOS_ADD";
// const REMOVE = "TODOS_REMOVE";

// export function addTodos(todo) {
//   return {
//     type: ADD,
//     payload: {
//       id: nanoid(),
//       todoItem: todo,
//     },
//   };
// }

// export function removeTodos(id) {
//   return {
//     type: REMOVE,
//     payload: id,
//   };
// }

// export function todosReducer(state = defaultState, action) {
//   switch (action.type) {
//     case ADD: {
//       return [...state, action.payload];
//     }

//     case REMOVE: {
//       return state.filter((todo) => todo.id !== action.payload);
//     }

//     default:
//       return state;
//   }
// }
