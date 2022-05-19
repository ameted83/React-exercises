import { useState } from "react";
import GithubUser from "./GithubUser";

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
            <GithubUser username={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUserList;
