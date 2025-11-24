// 

import { Link } from "react-router-dom";
import './layout.css';

export default function Layout({ user, onLogout }) {   // <-- FIXED

    return (
        <>
            <header className="navbar">

                {/* Logo */}
                <div className="logo">
                    <div className="logo-shape">MA</div>
                    <h1>My Portfolio</h1>
                </div>

                <nav className="nav-links">
                    <Link to="/">Home</Link> |
                    <Link to="/about">About</Link> |
                    <Link to="/education">Education</Link> |
                    <Link to="/projects">Projects</Link> | 
                    <Link to="/services">Services</Link> |
                    <Link to="/contact">Contact</Link>

                    {user ? (
                        <>
                            <span className="welcome-text">
                                Welcome, {user.username}
                            </span>

                            <button 
                                onClick={onLogout} 
                                className="btn btn-danger ms-2"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                            <Link to="/register" className="btn btn-warning">Register</Link>
                        </>
                    )}

                </nav>
            </header>
        </>
    );
}
