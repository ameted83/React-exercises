import { useParams } from "react-router-dom";
import useGithubUser from "./UseGithubUser";

const GithubUser = () => {
  const { username } = useParams();
  const { data, loading, error } = useGithubUser(username);

  // function handleGetUserData() {
  //   onFetchUser(username);
  // }

  return (
    <div>
      {/* <button onClick={handleGetUserData}> Load</button> */}
      {loading && <h2>Loading...</h2>}
      {error && <h2>There is an error</h2>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
};
export default GithubUser;
