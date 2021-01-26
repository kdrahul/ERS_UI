import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="navbar-brand">
                <Link to="/" className="nav-link">
                    Event Registration and Survey
        </Link>
            </div>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">
                            Home
            </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/admin">
                            Admin
            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
