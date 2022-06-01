import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./states/store";

export function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
