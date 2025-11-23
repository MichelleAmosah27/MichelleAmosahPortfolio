import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import './about';
import './home.css'

//-----------testing week 8 lessons here. Remember to delete-------------
//import { useState, useEffect } from 'react'; //these are known as hooks. it is something that will be injecting data within the lifecycle of the application - page will know and autoupdate

//let data = "My data from Michelle"

//-------------------------------------------------

export default function Home(){

    // const [data, setData] = useState(null);
    // const apiURL = '/api'; //this will allow cross-origin requirements

    // useEffect(() => {

    //     fetch(`${apiURL}/data`)
    //         .then((res) => res.json())
    //         .then((dataFromServer) => setData(dataFromServer))
    //         .then(() => console.log(`Data fetched successfully!`))

    // }, [data]);

     //<p> {data ? data.message : "Loading data from server..."}</p>
 
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

