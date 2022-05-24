import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import Hello from "./Hello";
// import Counter from "./Counter";
// import ClickCounter from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
//  import InteractiveWelcome from "./InteractiveWelcome";
// import Login from "./Login";
// import { UncontrolLogin } from "./UncontrolLogin";
// import { TodoList } from "./TodoList";
// import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";
// import { CreateLanguage } from "./CreateLanguage";
// import Sum from "./Sum";
// import GithubUserList from "./GithubUserList";
// import FilteredList from "./FilteredList";
// import CarDetails from "./CarDetails";
import Welcome from "./Welcome";
import Counter from "./Counter";
// import ShowGithubUser from "./ShowGithubUser";

export function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // const [showCounter, setShowCounter] = useState(true);
  // function handleToggleCounter() {
  //   setShowCounter((s) => !s);
  // }

  return (
    <>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>

      <Routes>
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>

      {/* <Hello /> */}
      {/* <InteractiveWelcome /> */}
      {/* <ClickCounter />
        <ClickTracker />  */}
      {/* <Login />
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
                          <button onClick={() => removeItem(index)}>X</button>
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
        {/* <Sum />
        {showCounter && <Counter />}
        <button onClick={handleToggleCounter}>Toggle Counter</button> */}
      {/* <GithubUserList />
        <FilteredList />
        <CarDetails
          initialData={{
            model: "",
            year: "",
            color: "",
          }} 
        />*/}
    </>
  );
}
