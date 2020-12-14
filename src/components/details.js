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
      <div id="detail-card">
        <h1>Name:{items.name}</h1>
        <h1>Desciption: {items.description}</h1>
        <h1>Created on:{items.datetime}</h1>
        <h1>Organizers:{items.organizer}</h1>
        <h1>Registration Limit: {items.limit}</h1>
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
