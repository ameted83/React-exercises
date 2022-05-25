import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

const GithubUserList = () => {
  const [username, setUsername] = useState(["ameted83"]);

  const haddleAddUsername = (event) => {
    event.preventDefault();
    setUsername([...username, event.target.elements.git.value]);
  };

  return (
    <div>
      <form onSubmit={haddleAddUsername}>
        <input name="git" />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {username.map((name) => (
          <li>
            <ShowGithubUser />
            <li>
              <Link to="/name"> {name}</Link>
            </li>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default GithubUserList;
