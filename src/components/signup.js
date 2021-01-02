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
    <form class="card card-body">
      <div className="form-group">
        <label for="username">Username</label>
        <input id="username" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group">
        <label for="pass">Password</label>
        <input id="pass" type="password" className="form-control" value="" />
      </div>
      <div className="form-group">
        <label for="cfpass">Confirm Password</label>
        <input id="cfpass" className="form-control" type="password" />
      </div>
      <div className="form-group">
        <label for="email">Email ID</label>
        <input
          id="phone"
          className="form-control"
          placeholder="Email"
          type="email"
        />
      </div>
      <div className="form-group">
        <label for="phone">Phone Number</label>
        <input id="phone" className="form-control" placeholder="Phone Number" />
      </div>

      <button className="btn btn-success" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Signup;
