import './education.css'

export default function Education(){

    return(
    <>
        <div className="education-container">
            <h2>My Education</h2>

            <p className="eduIntro">Here is a summary of my Academic and professional qualifications.</p>

            <div className="eduTimeline">

                {/*Example one */}
                <div className="timeline-item"><div className="timeline-date">2020 - Present</div></div>
                <div className="timeline-content">
                    <h3>Health Informatics Technology (Advance Diploma)</h3>
                    <p>Centennial College, Toronto</p>
                    <p>Focused on healthcare data management, databases, and IT solutions for medical environments.</p>
                </div>

                 {/*Example two */}
                <div className="timeline-item"><div className="timeline-date">2015 - 2018</div></div>
                <div className="timeline-content">
                    <h3>Practical Nursing (Diploma)</h3>
                    <p>School</p>
                    <p>Description</p>
                </div>

                 {/*Example three */}
                <div className="timeline-item"><div className="timeline-date">2010 - 2012</div></div>
                <div className="timeline-content">
                    <h3>Another Education</h3>
                    <p>School</p>
                    <p>Description</p>
                </div>

            </div>

        </div>

        

    </>  
    )
}