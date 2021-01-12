import axios from "axios";
import { useEffect, useState } from "react";
const Response = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8989/response/");
      setItems(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Response</th>
            <th scope="col">Time</th>
            <th scope="col">Question ID</th>
            <th scope="col">User ID</th>
            <th scope="col">Event ID</th>
          </tr>
        </thead>
        <tbody>
          {items.map((respDetail) => (
            <tr key={respDetail.id}>
              <th scope="row">{respDetail.id}</th>
              <td>{respDetail.id}</td>
              <td>{respDetail.user_response}</td>
              <td>{respDetail.resp_date}</td>
              <td>{respDetail.question_id}</td>
              <td>{respDetail.user_id}</td>
              <td>{respDetail.event_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Response;
