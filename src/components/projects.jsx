import './projects.css'

export default function Projects(){

    return(
    <>
        <div className="projects-container">

            <h2>My Projects</h2>

            <p className="intro">
                Here are some of the projects I have worked on. Each of them helped me grow as a developer by building real-world solutions and applying new skills.
            </p>

            <div className="projects-grid">
                {/*Project 1*/}
                <div className="project-card">
                    <img src="" alt="" className="project-image"/>
                    <h3>Project One</h3>
                    <p>Project one description</p>
                </div>

                {/*Project 2*/}
                <div className="project-card">
                    <img src="" alt="" className="project-image"/>
                    <h3>Project Two</h3>
                    <p>Project Two description</p>
                </div>

                {/*Project 3*/}
                <div className="project-card">
                    <img src="" alt="" className="project-image"/>
                    <h3>Project Three</h3>
                    <p>Project three description</p>
                </div>

            </div>
        </div>
    </>  
    )
}