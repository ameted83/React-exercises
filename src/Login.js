import React, { useState } from "react";

const Login = () => {
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

  return (
    <>
      <h2>My Form</h2>
      <div>
        <input
          name="username"
          value={data.username}
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleInputChange}
        />
        <input
          name="remember"
          type="checkbox"
          checked={data.remember}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default Login;
