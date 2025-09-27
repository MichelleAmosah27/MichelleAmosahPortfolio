import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import './about';
import './home.css'

export default function Home(){

    return(
    <>
       <div className='home-container'>

            <h2>Welcome to My Portfolio</h2>

            <p>
                Hi, I am Michelle Amosah. Thank you for visiting my portfolio website. My mission is to grow as a developer, share my work, and build meaningful projects.
            </p>

            <p className='mission-statement'>
                <strong>Mission Statement:</strong> To create impactful, user-friendly, and innovative solutions through continuous learning and dedication.
            </p>

            {/* Button linking to About page */}
            
            <Link to="about" className="btn-about">Learn more About Me</Link>

       </div>

    </>  
    )
}

