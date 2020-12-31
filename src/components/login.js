import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <form className="container">
      <div className="form-group">
        <label for="username">Username</label>
        <input
          className="form-control"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label for="username">Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <Link to={`/home`}>Login with Link</Link>
        <button type="submit" className="btn btn-primary" onSubmit="">
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;
