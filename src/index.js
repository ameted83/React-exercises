import ReactDOM from "react-dom";
import { Root } from "./Root";
import "./index.css";
// import { store } from "./states/store";
// import { counterReducer } from "./states/counterReducer";
// import { todosReducer } from "./states/todosReducer";
// import { nanoid } from "nanoid";

const root = document.querySelector("#root");

ReactDOM.render(<Root />, root);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(counterReducer.actions.increment(5));
// store.dispatch(counterReducer.actions.increment(3));
// store.dispatch(counterReducer.actions.increment(6));
// store.dispatch(counterReducer.actions.reset());

// store.dispatch(
//   todosReducer.actions.add({
//     id: nanoid(),
//     title: "Ho letto un libro",
//     completed: true,
//   })
// );
// store.dispatch(
//   todosReducer.actions.remove({
//     id: nanoid(),
//     title: "Ho mangiato un dolce",
//     uncompleted: false,
//   })
// );
// store.dispatch(
//   todosReducer.actions.edit({ id: nanoid(), data: { completed: true } })
// );
