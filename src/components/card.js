import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-subtitle text-muted">{props.description}</p>
      </div>

      {/*Bottom bar */}
      <div className="card-body">
        <Link
          className="btn btn-outline-success card-link"
          to={`/register/${props.itemid}`}
        >
          Register
        </Link>
        <Link
          className="btn btn-outline-primary card-link"
          to={`/events/${props.itemid}`}
        >
          Show Details
        </Link>
        <div className="card-text">
          <small className="text-muted">2 days to go </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
