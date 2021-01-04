import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const onSubmit = async (data) => {
  console.log(data);
  await fetch("http://localhost:8989/events/", {
    method: "post",
    headers: {
      Accept: "application/json, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
};
const Events = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8989/events/");

      setItems(result.data);
    };
    fetchData();
  }, [items]);
  const { register, handleSubmit, errors } = useForm();

  return (
    <div>
      <div>
        <button
          className="btn btn-primary mb-2"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          + Add Event
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <form id="eventForm">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    New Event
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
                    <label>Event Name</label>
                    <input
                      id="event_name"
                      type="text"
                      className="form-control"
                      name="name"
                      ref={register}
                    />
                    <label>Description</label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      ref={register}
                    />
                    <label>Max. Participants</label>
                    <input
                      type="number"
                      className="form-control"
                      name="max_limit"
                      ref={register({
                        valueAsNumber: true,
                      })}
                    />
                    <label>Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="venue"
                      ref={register}
                    />
                    <label>Entry Fee</label>
                    <input
                      type="number"
                      className="form-control"
                      name="fee"
                      ref={register({
                        valueAsNumber: true,
                      })}
                    />
                    <label>Prize Money</label>
                    <input
                      type="number"
                      className="form-control"
                      name="prize_money"
                      ref={register({
                        valueAsNumber: true,
                      })}
                    />
                    <label>Date and Time</label>
                    <input
                      type="datetime"
                      className="form-control"
                      name="starts_at"
                      ref={register}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit(onSubmit)}
                    data-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Desciption</th>
            <th scope="col">Location</th>
            <th scope="col">Time</th>
            <th scope="col">Max. Participants</th>
            <th scope="col">Entry Fee</th>
            <th scope="col">Prize Money</th>
          </tr>
        </thead>
        <tbody>
          {items.map((eventDetails) => (
            <tr>
              <th scope="row">{eventDetails.id}</th>
              <td>{eventDetails.name}</td>
              <td>{eventDetails.description}</td>
              <td>{eventDetails.venue}</td>
              <td>{new Date(eventDetails.starts_at).toLocaleString()}</td>
              <td>{eventDetails.max_limit}</td>
              <td>{eventDetails.fee}</td>
              <td>{eventDetails.prize_money}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Events;
