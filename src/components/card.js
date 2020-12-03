import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="h-32 m-2 shadow-md p-2">
      <div className="">
        <h3 className="antialiased font-bold text-2xl">{props.title}</h3>
        <p className="overflow-hidden antialiased text-lg">
          {props.description}
        </p>
      </div>

      {/*Bottom bar */}
      <div className="float-right mt-8 ">
        <Link
          className="py-1 px-2 bg-green-600 mx-2 text-white rounded"
          to={`/register/${props.itemid}`}
        >
          Register
        </Link>
        <Link
          className="py-1 px-2 bg-red-700 mx-2 text-white rounded"
          to={`/events/${props.itemid}`}
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
