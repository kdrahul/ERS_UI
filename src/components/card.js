import street from "../assets/images/Chinese_Streets.jpg";
const Card = (props) => {
  return (
    <div className="m-2 flex shadow-xl ">
      {/* Left part of the Card. Image Thumbnail */}
      <div className="thumbnail">
        <img className="bg-cover max-h-32" src={street} alt={props.title} />
      </div>

      {/* Right part of the Card. Event Description */}
      <div className="">
        <h3 className="antialiased font-bold text-2xl">{props.title}</h3>
        <p className="antialiased text-lg">{props.description}</p>

        {/*Bottom bar */}
        <div className="flex justify-end ">
          <button className="bg-purple-700 text-white m-2 p-1 px-2 rounded-xl shadow-lg">
            Register
          </button>
          <button className="bg-yellow-600 text-white m-2 p-1 px-2 rounded-xl shadow-lg">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
