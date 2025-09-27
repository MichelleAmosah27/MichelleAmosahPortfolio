import './services.css'


export default function Services(){

    return(
    <>
        <div className="services-container">

            <h2>My Services</h2>

            <p className="services-intro">Here are the main services I can provide, tailored to meet your business and personal needs.</p>

            <div className="service-card">
                {/*Service 1*/}
                <img src="" alt="" className="service-img" />
                <h3>Web Development</h3>
                <p>Building mordern, responsive websites using React, JavaScript, and CSS to create user-friendly digital experiences.</p>
            </div>

              <div className="service-card">
                {/*Service 2*/}
                <img src="" alt="" className="service-img" />
                <h3>Data Analysis</h3>
                <p>Analyzing and visualizing data to uncover insights that support informed business and research decisions.</p>
            </div>

              <div className="service-card">
                {/*Service 3*/}
                <img src="" alt="" className="service-img" />
                <h3>Mobile Applications</h3>
                <p>Designing mobile-friendly solutions and applications that run seamlessly on Android and iOS platforms.</p>
            </div>

        </div>

        

    </>  
    )
}