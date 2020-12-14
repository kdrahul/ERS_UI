import { useEffect, useState } from "react";
import axios from "axios";

const Signup = () => {
  const [auth, setAuth] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:8989/users/");
      console.log(res.data);
      setAuth(res.data);
    };
    fetchUsers();
  }, []);
  return (
    <div className="flex justify-center place-self-center align-middle m-auto">
      <form className="flex flex-col w-1/3 shadow-lg px-16 py-8 ">
        <span className="text-center text-2xl text-green-400">Signup</span>
        <input
          className="border-solid border-green-300 border-opacity-100 rounded-lg border-2 p-2 mt-4"
          type="text"
          placeholder="Username"
        />
        <input
          className="border-solid border-green-300 border-opacity-100 rounded-lg border-2 p-2 mt-4"
          type="password"
          placeholder="Password"
        />
        <input
          className="border-solid border-green-300 border-opacity-100 rounded-lg border-2 p-2 mt-4"
          type="password"
          placeholder="Confirm Password"
        />
        <button
          type="submit"
          className="text-xl border-green-400 border-opacity-100 rounded-lg border-2 bg-green-400 text-white my-4"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
