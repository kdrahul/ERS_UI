import axios from "axios";
import { useEffect, useState } from "react";
const Users = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8989/users/");
      setItems(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <button className="btn btn-primary mb-2">+ Add User</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Branch</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {items.map((userDetail) => (
            <tr>
              <th scope="row">{userDetail.id}</th>
              <td>{userDetail.username}</td>
              <td>{userDetail.first_name}</td>
              <td>{userDetail.last_name}</td>
              <td>{userDetail.phone}</td>
              <td>{userDetail.email}</td>
              <td>{userDetail.branch}</td>
              <td>{userDetail.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
