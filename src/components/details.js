import { useState, useEffect } from "react";
import axios from "axios";
const EventDetails = ({ match }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchedItems = async () => {
      const res = await axios.get(
        `http://localhost:8989/events/${match.params.id}`
      );
      console.log(res.data);
      setItems(res.data);
    };
    fetchedItems();
  }, [match]);
  return (
    <div>
      <div className="dCard">
        <ul>
          <li>
            <span>{items.name}</span>
          </li>
          <li>
            <span>{items.description}</span>
          </li>
          <li>
            <span>{items.max_limit}</span>
          </li>
          <li>
            <span>{items.max_limit}</span>
          </li>
        </ul>
      </div>
      <div id="detail-card">
        <h1>Name:{items.name}</h1>
        <h1>Desciption: {items.description}</h1>
        <h1>Created on:{items.starts_at}</h1>
        <h1>Registration Limit: {items.max_limit}</h1>
        <h1>Entre Fee:{items.fee ? items.fee : "Free"}</h1>
      </div>
      <div id="card-buttons">
        <a href="#register"> Register Now!</a>
        <a href="#Contact">Contact Organizers</a>
      </div>
    </div>
  );
};

export default EventDetails;
