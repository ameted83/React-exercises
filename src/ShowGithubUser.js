import React from "react";
import GithubUser from "./GithubUser";

const ShowGithubUser = (username) => {
  console.log(username);
  return (
    <div>
      <GithubUser username="ameted83" />
    </div>
  );
};

export default ShowGithubUser;
