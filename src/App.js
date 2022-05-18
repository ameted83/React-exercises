import React from "react";
import Hello from "./Hello";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolLogin } from "./UncontrolLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import { CreateLanguage } from "./CreateLanguage";
import Sum from "./Sum";

export class App extends React.Component {
  state = {
    language: "en",
  };
  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <DisplayLanguage.Provider value={this.state.language}>
          <Container title={"My application"}>
            <CreateLanguage />
            <Hello />
            <InteractiveWelcome />
            <Counter />
            <ClickCounter />
            <ClickTracker />
            <Login />
            <UncontrolLogin />
            <TodoList
              render={(todos, addItem, reset, removeItem) => {
                return (
                  <div>
                    <form onSubmit={addItem}>
                      <input name="todo"></input>
                      <ul>
                        {todos.map((item, index) => {
                          return (
                            <li>
                              {item},
                              <button onClick={() => removeItem(index)}>
                                X
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                      <button type="submit">Invio</button>
                      <button onClick={reset}>Reset</button>
                    </form>
                  </div>
                );
              }}
            />
            <Sum numbers={[1, 3, 5]} />
          </Container>
        </DisplayLanguage.Provider>
      </>
    );
  }
}
