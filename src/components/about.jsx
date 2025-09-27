import './about.css'
import profilePic from '/src/assets/profilePic.jpg'
import resume from '/src/assets/resume.pdf'


export default function About(){

    return(
    <>
        <div className="about-me-container">

            <h2>About Me</h2>

            {/* Profile Image */}
            <img src={profilePic} alt="An image of Michelle Amosah" className="profile-pic" />

            {/*A short Biography */}

            <p className="bio"> My name is <strong>Michelle Amosah,</strong> I am an aspiring software developer with a experience in administration and aviation security. I am papssionate about technology, problem solving, and building toools that make life easier. This portfolio highlights my projects, education, and professional goals.</p>

            {/* Resume Download Link */}
            <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-link">View My Resume (PDF)</a>

        </div>

    </>  
    )
}