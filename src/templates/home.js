import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/card";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchedItems = async () => {
      const res = await axios.get("http://localhost:8989/events/");
      console.log(res.data);
      setItems(res.data);
    };
    fetchedItems();
  }, []);
  return (
    <div className="">
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.name}
          description={item.description}
          itemid={item.id}
        />
      ))}
    </div>
  );
};

export default Home;
