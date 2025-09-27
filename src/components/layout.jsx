import { Link } from "react-router-dom"
import './layout.css'



 export default function Layout(){

    return(
    <>

        <header className="navbar">

            {/* Logo */}

            <div className="logo">
                {/**A simple hexagon shape with initials */}
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
            </nav>
       </header> 
    </>
    )
}