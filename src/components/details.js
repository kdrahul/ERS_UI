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
      <h1>{items.name}</h1>
    </div>
  );
};

export default EventDetails;
