import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());
function useGithubUser() {
  const { data, error } = useSWR(`https://api.github.com/users`, fetcher);

  return (
    <>
      {!data && !error && <h3>Loading....</h3>}
      {error && <h3>An error has occurred</h3>}
      {data && !error && (
        <ul>
          {data.map((user) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default useGithubUser;
