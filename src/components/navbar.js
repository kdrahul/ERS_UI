import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between px-4 py-1">
      <div>
        <ul>
          <li>
            <Link to="/" className="text-xl text-purple-700">
              Event Registration and Survey
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="flex justify-evenly">
          <li className="mx-2 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 text-lg">
            <a href="#brand">About</a>
          </li>
          <li className="mx-2 text-lg">
            <a href="#brand">Surveys</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
