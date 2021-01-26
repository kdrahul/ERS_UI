import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
const EventDetails = ({match}) => {
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

    let today = Date.now();
    let set_date = new Date(items.starts_at);
    console.log(Date(today));
    return (
        <div className="container card">
            {/* Content */}
            <div className="card-body">
                <h4 className="card-title">{items.name}</h4>
                <p>{items.description}</p>
                <p>Max Participants: {items.max_limit}</p>
                <p> Entry Fee: {items.fee ? items.fee : "Free!"} </p>
                <small className="text-muted">
                    {set_date.getHours() +
                        ":" +
                        set_date.getMinutes() +
                        " " +
                        set_date.getDate() +
                        "/" +
                        set_date.getMonth() +
                        "/" +
                        set_date.getFullYear()}
                </small>
            </div>
            <div className="card-body">
                <Link
                    to="/events/{items.id}/fill-form"
                    className="btn btn-outline-success"
                >
                    Register
        </Link>
                <Link className="btn btn-outline-danger"
                    to={`/event/${match.params.id}/survey`}>
                    Take up a Survey
                </Link>
            </div>
        </div>
    );
};

export default EventDetails;
