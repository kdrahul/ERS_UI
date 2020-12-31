import React, { useState } from "react";
import Users from "../components/admin_components/users";
import Survey from "../components/admin_components/survey";
import Events from "../components/admin_components/events";

const titles = ["Users", "Surveys Responses", "Events"];
const options = [<Users />, <Survey />, <Events />];

const Landing = () => {
  const [active, setActive] = useState(titles[0]);
  return (
    <div className="">
      <button className="flex text-xl px-2 py-4">
        {titles.map((op) => (
          <div
            key={op}
            active={active === op}
            onClick={() => setActive(op)}
            className="p-2"
          >
            {op}
          </div>
        ))}
      </button>
      <p />
    </div>
  );
};
// Usage
export default Landing;
