import axios from "axios";
import { useEffect, useState } from "react";
const Users = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8989/events");
      setItems(result.data);
    };
    fetchData();
  }, []);
  return <div></div>;
};

export default Users;
