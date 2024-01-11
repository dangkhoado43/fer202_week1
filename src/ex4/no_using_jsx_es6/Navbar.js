import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./Navbar.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

// ============================== Exercise 3 ==============================
function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <img src={logo} alt="React Logo" style={{ width: "50px" }} />
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>

    );
}

export default Navbar;