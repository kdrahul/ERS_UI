import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const Users = () => {
  const [items, setItems] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8989/users/");
      setItems(result.data);
    };
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    const result = await axios.post("http://localhost:8989/users/", data);
    const newItems = [...items, result.data];
    setItems(newItems);

    reset({});
  };

  const deleteUser = async (userId) => {
    console.log(userId);
    const result = await axios
      .delete(`http://localhost:8989/events/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          const newItems = items.filter((oldItem) => oldItem.id !== userId);
          setItems(newItems);
        } else {
          console.log(res.status);
        }
      })

      .catch((res) => console.log(res));
    console.log(result);
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-primary mb-2"
          data-toggle="modal"
          data-target="#userModal"
        >
          + Add User
        </button>
      </div>

      <div
        className="modal fade"
        id="userModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <form>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="userModalLabel">
                  New User
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    type="text"
                    className="form-control"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    name="first_name"
                    type="text"
                    className="form-control"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    name="last_name"
                    type="text"
                    className="form-control"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    name="phone"
                    type="text"
                    className="form-control"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>E-mail</label>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Branch</label>
                  <input
                    name="branch"
                    type="text"
                    className="form-control"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <input
                    name="role"
                    type="text"
                    className="form-control"
                    ref={register}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={handleSubmit(onSubmit)}
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
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
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((userDetail) => (
            <tr key={userDetail.id}>
              <th scope="row">{userDetail.id}</th>
              <td>{userDetail.username}</td>
              <td>{userDetail.first_name}</td>
              <td>{userDetail.last_name}</td>
              <td>{userDetail.phone}</td>
              <td>{userDetail.email}</td>
              <td>{userDetail.branch}</td>
              <td>{userDetail.role}</td>
              <td>
                <button className="btn btn-outline-primary">Edit</button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(userDetail.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
