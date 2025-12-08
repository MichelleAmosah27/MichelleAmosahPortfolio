

import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <section className="home-container" data-cy="home-page">

      <header className="home-header">
        <h1 className="home__title" data-cy="home-title">
          Welcome to My Portfolio
        </h1>
        <p className="home__intro" data-cy="home-intro">
          Hi, I’m <strong>Michelle Amosah</strong>.  
          I am building expertise in Aviation Security, Web Development,
          Data Analysis, and Mobile Development.
        </p>
      </header>

      <article className="home__mission-box" data-cy="mission-box">
        <h2 className="home__mission-title">My Mission</h2>
        <p className="home__mission" data-cy="mission-statement">
          To create impactful, secure, user-friendly, and innovative solutions 
          through continuous learning, disciplined practice, and dedication.
        </p>
      </article>

      <div className="home__cta" data-cy="cta-section">
        <Link 
          to="/about" 
          className="btn-about"
          data-cy="about-link"
        >
          Learn More About Me
        </Link>
      </div>

    </section>
  );
}



