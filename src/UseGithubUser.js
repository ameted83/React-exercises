import useSWR from "swr";
import { Link, Outlet } from "react-router-dom";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGithubUser() {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users`,
    fetcher
  );

  function handleRefreshUsers() {
    mutate();
  }

  return (
    <>
      <button onClick={handleRefreshUsers}>Refresh</button>
      {!data && !error && <h3>Loading....</h3>}
      {error && <h3>An error has occurred</h3>}
      {data && !error && (
        <ul>
          {data.map((user) => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}

      <Outlet />
    </>
  );
}

export default useGithubUser;
