import React from "react";
import GithubUser from "./GithubUser";

const ShowGithubUser = (username) => {
  // console.log(username);
  return (
    <div>
      <GithubUser name={username} />
    </div>
  );
};

export default ShowGithubUser;
