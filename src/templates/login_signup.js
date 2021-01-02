import React, { useState } from "react";
import Login from "../components/login";
import Signup from "../components/signup";

const types = ["Login", "Signup"];

const LoginSignup = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <div className="container">
      <div className="btn-group">
        {types.map((type) => (
          <div
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
            className="p-2"
          >
            <button className="btn">{type}</button>
          </div>
        ))}
      </div>
      <p />
      <p>{active === "Login" ? <Login /> : <Signup />}</p>
    </div>
  );
};
// Usage
export default LoginSignup;
