import { useGithubUser } from "./UseGithubUser";

const GithubUser = ({ username }) => {
  const { data } = useGithubUser(username);

  return <div>{data && <h1>{data.name}</h1>}</div>;
};
export default GithubUser;
