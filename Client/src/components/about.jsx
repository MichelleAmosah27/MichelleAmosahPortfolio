
import "./about.css";
import profilePic from "/src/assets/profilePic.jpg";
import resume from "/src/assets/resume.pdf";

export default function About() {
  return (
    <section className="about-container" data-cy="about-page">

      <header>
        <h1 className="about__title" data-cy="about-title">
          About Me
        </h1>
        <p className="about__subtitle" data-cy="about-subtitle">
          Aspiring Software Developer • Aviation Security Inspector • Lifelong Learner
        </p>
      </header>

      {/* Profile Image */}
      <img
        src={profilePic}
        alt="Michelle Amosah"
        className="about__profile-pic"
        data-cy="profile-picture"
      />

      {/* Bio */}
      <article className="about__bio-box" data-cy="bio-box">
        <p className="about__bio" data-cy="about-bio">
          My name is <strong>Michelle Amosah</strong>. I am an aspiring software developer with a
          strong background in administration and aviation security. I am passionate about
          technology, problem-solving, and building tools that help people work more efficiently.
          <br /><br />
          I am currently building expertise in <strong>Web Development</strong>, 
          <strong> Mobile Development</strong>, <strong>Data Analysis</strong>, and 
          <strong> Microsoft Applications</strong> — while continuing to grow in
          <strong> Aviation Security</strong>.
        </p>
      </article>

      {/* Resume button */}
      <div className="about__cta">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="about__resume-btn"
          data-cy="resume-link"
        >
          View My Resume (PDF)
        </a>
      </div>

    </section>
  );
}
