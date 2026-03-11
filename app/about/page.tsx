export default function AboutPage() {
  const skills = [
    "Python",
    "C/C++",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Git",
    "Linux",
    "Figma",
  ];

  return (
    <div className="about-content">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi! I&apos;m Saurabh Chauhan, a passionate and curious learner with a
          love for technology and problem-solving. I have{" "}
          <span className="keyword">Python</span>,
          <span className="keyword">C/C++</span> and{" "}
          <span className="keyword">JavaScript</span> experience, and I love
          creating things that simplify life or make it more fun.
        </p>
        <p>
          I&apos;m constantly discovering new concepts, acquiring new skills, and
          challenging myself to become a better person — whether through coding,
          giving back to projects, or learning about how things work.
        </p>
        <p>Thanks for visiting — feel free to explore my work!</p>
      </div>

      <div className="skills-section">
        <h3>Tech Stack</h3>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill}>
              <strong>{skill}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
