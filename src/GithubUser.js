import { useGithubUser } from "./UseGithubUser";

const GithubUser = ({ username }) => {
  const { data, loading, error, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser(username);
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Load user data</button>
      {loading && <h2>Loading...</h2>}
      {error && <h2>There has been an error</h2>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
};
export default GithubUser;
