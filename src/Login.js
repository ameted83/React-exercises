import React, { useState } from "react";

function useLogin() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData({
      [name]: type === "checbox" ? checked : value,
    });
  }
  return { data: data, onInputChange: handleInputChange };
}

const Login = ({ username, password }) => {
  const { data, onInputChange } = useLogin(username, password);

  return (
    <>
      <h2>My Form</h2>
      <div>
        <input name="username" value={data.username} onChange={onInputChange} />
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={onInputChange}
        />
        <input
          name="remember"
          type="checkbox"
          checked={data.remember}
          onChange={onInputChange}
        />
      </div>
    </>
  );
};

export default Login;
