import { Link } from "react-router-dom";
import "../styles/components/navbar.sass";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 sticky-top navbar-custom">
            <div className="container">
                <Link to="/" className="navbar-brand">RD</Link>

                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navmenu"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar