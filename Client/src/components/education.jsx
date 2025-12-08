import "./education.css";

export default function Education() {
  return (
    <section className="education-container" data-cy="education-page">

      <h1 className="education-title" data-cy="education-title">
        My Education
      </h1>

      <p className="eduIntro" data-cy="education-intro">
        Here is a summary of my academic background and professional training that supports my career in aviation security, software development, and data analysis.
      </p>

      <div className="eduTimeline" data-cy="education-timeline">

        {/* Current program */}
        <div className="timeline-item" data-cy="edu-item-1">
          <div className="timeline-date">2023 – Present</div>
          <div className="timeline-content">
            <h3>Advanced Diploma – Health Informatics Technology</h3>
            <p>Centennial College • Toronto, Canada</p>
            <p>
              Focused on databases, health information systems, software development, 
              data analysis, and security of clinical systems.
            </p>
          </div>
        </div>

        {/* Certificate you can realistically pursue soon */}
        <div className="timeline-item" data-cy="edu-item-2">
          <div className="timeline-date">2024 – 2025</div>
          <div className="timeline-content">
            <h3>Cybersecurity & Aviation Security Courses</h3>
            <p>Transport Canada • CATSA • Online Training</p>
            <p>
              Includes airport security operations, threat awareness, regulatory compliance,
              and foundational cybersecurity skills for secure system design.
            </p>
          </div>
        </div>

        {/* Microsoft Career Path Qualification */}
        <div className="timeline-item" data-cy="edu-item-3">
          <div className="timeline-date">2025 (In Progress)</div>
          <div className="timeline-content">
            <h3>Microsoft Certifications</h3>
            <p>Microsoft Learn</p>
            <p>
              Working toward certifications in MS365 Fundamentals, Power Platform,
              and Azure fundamentals to support automation, data workflows, 
              and cloud-based solutions.
            </p>
          </div>
        </div>

        {/* Future goal that supports your career path
        <div className="timeline-item" data-cy="edu-item-4">
          <div className="timeline-date">Future Goal</div>
          <div className="timeline-content">
            <h3>Software Development Degree (BSc or BASc)</h3>
            <p>Potential: York University • University of Toronto • Toronto Metropolitan University</p>
            <p>
              To strengthen programming expertise, systems design, and data-driven problem solving 
              for advanced roles in IT, aviation technology, and security analytics.
            </p>
          </div>
        </div> */}

      </div>

    </section>
  );
}
