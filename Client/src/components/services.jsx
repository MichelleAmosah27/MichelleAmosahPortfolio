// import './services.css'


// export default function Services(){

//     return(
//     <>
//         <div className="services-container">

//             <h2>My Services</h2>

//             <p className="services-intro">Here are the main services I can provide, tailored to meet your business and personal needs.</p>

//             <div className="service-card">
//                 {/*Service 1*/}
//                 <img src="" alt="" className="service-img" />
//                 <h3>Web Development</h3>
//                 <p>Building mordern, responsive websites using React, JavaScript, and CSS to create user-friendly digital experiences.</p>
//             </div>

//               <div className="service-card">
//                 {/*Service 2*/}
//                 <img src="" alt="" className="service-img" />
//                 <h3>Data Analysis</h3>
//                 <p>Analyzing and visualizing data to uncover insights that support informed business and research decisions.</p>
//             </div>

//               <div className="service-card">
//                 {/*Service 3*/}
//                 <img src="" alt="" className="service-img" />
//                 <h3>Mobile Applications</h3>
//                 <p>Designing mobile-friendly solutions and applications that run seamlessly on Android and iOS platforms.</p>
//             </div>

//         </div>

        

//     </>  
//     )
// }

import "./services.css";

export default function Services() {
  return (
    <section className="services-container" data-cy="services-page">

      <h1 className="services-title" data-cy="services-title">
        My Services
      </h1>

      <p className="services-intro" data-cy="services-intro">
        Here are the main services I provide, designed to support organizations, teams, and individuals through secure, efficient, and modern digital solutions.
      </p>

      <div className="services-grid" data-cy="services-grid">

        {/* Service 1 */}
        <div className="service-card" data-cy="service-web-dev">
          <img src="" alt="" className="service-img" />
          <h3>Web Development</h3>
          <p>
            Creating secure, modern, and responsive websites using React, JavaScript, and CSS. 
            Focused on clean UI, accessibility, and strong user experience.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card" data-cy="service-data-analysis">
          <img src="" alt="" className="service-img" />
          <h3>Data Analysis</h3>
          <p>
            Organizing, analyzing, and visualizing data to support evidence-based decision-making.
            Skilled in Excel, Power BI, and foundational Python data tools.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card" data-cy="service-mobile-dev">
          <img src="" alt="" className="service-img" />
          <h3>Mobile Applications</h3>
          <p>
            Designing user-focused Android applications using Kotlin and modern UI frameworks such as Jetpack Compose.
          </p>
        </div>

        {/* Service 4 */}
        <div className="service-card" data-cy="service-aviation-security">
          <img src="" alt="" className="service-img" />
          <h3>Aviation Security Support</h3>
          <p>
            Applying regulatory knowledge (CATSA, Transport Canada, ICAO standards) to assist with incident reporting,
            compliance documentation, and operational safety workflows.
          </p>
        </div>

      </div>
    </section>
  );
}
