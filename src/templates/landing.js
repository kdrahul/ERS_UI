import React, { useState } from "react";
import Login from "../components/login";
import Signup from "../components/signup";

const types = ["Login", "Signup"];

const Landing = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <div className="">
      <button className="flex text-xl px-2 py-4">
        {types.map((type) => (
          <div
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
            className="p-2"
          >
            {type}
          </div>
        ))}
      </button>
      <p />
      <p>{active === "Login" ? <Login /> : <Signup />}</p>
    </div>
  );
};
// Usage
export default Landing;
