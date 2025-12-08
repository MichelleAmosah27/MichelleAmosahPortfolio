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
                    <Link to="/" data-cy="nav-home">Home</Link> |
                    <Link to="/about" data-cy="nav-about">About</Link> |
                    <Link to="/education"data-cy="nav-education">Education</Link> |
                    <Link to="/projects" data-cy="nav-projects">Projects</Link> | 
                    <Link to="/services" data-cy="nav-services">Services</Link> |
                    <Link to="/contact"data-cy="nav-contact">Contact</Link>

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
                            <Link to="/login" className="btn btn-outline-light me-2" data-cy="nav-login">Login</Link>
                            <Link to="/register" className="btn btn-warning" data-cy="nav-register">Register</Link>
                        </>
                    )}

                </nav>
            </header>
        </>
    );
}
