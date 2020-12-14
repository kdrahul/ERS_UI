import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="flex justify-center place-self-center align-middle ">
      <form className="flex flex-col w-1/3 shadow-lg px-16 py-8 ">
        <span className="text-center text-2xl text-green-400">Login</span>
        <input
          className="border-solid border-green-300 border-opacity-100 rounded-lg border-2 p-2 mt-4"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border-solid border-green-300 border-opacity-100 rounded-lg border-2 p-2 mt-4"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to={`/home`}>Login with Link</Link>
        <button
          type="submit"
          className="text-xl border-green-400 border-opacity-100 rounded-lg border-2 bg-green-400 text-white my-4"
          onSubmit=""
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
