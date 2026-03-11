import Link from "next/link";

const skills = [
  "Python",
  "C/C++",
  "JavaScript",
  "React",
  "Next.js",
  "HTML/CSS",
  "Git",
  "Linux",
  "Figma",
];

const projects = [
  {
    title: "Interactive Tip Calculator",
    description:
      "Calculate tip amount and distribution among individuals.",
    tech: ["HTML", "CSS", "JS"],
    href: "https://saurabh-1785.github.io/interactive-tip-calculator/",
  },
  {
    title: "Alternate Site Designs",
    description:
      "Figma based alternate designs for various websites.",
    tech: ["FIGMA"],
    href: "https://www.figma.com/design/85sA25E2qpJEFeIbyxxelf/Alternate-design-sites?node-id=0-1&t=mPPWaAYJ0SUyhF9y-1",
  },
];

export default function HomePage() {
  return (
    <div className="bento-grid">
      {/* Hero Card - Large left */}
      <div className="bento-card bento-hero">
        <div className="hero-gradient"></div>
        <div className="hero-avatar">SC</div>
        <h1 className="hero-heading">
          Crafting Digital<br />
          Experiences That<br />
          Feel Effortless
        </h1>
      </div>

      {/* About Card - Center */}
      <div className="bento-card bento-about">
        <h3 className="bento-label">About</h3>
        <p>
          Hi, I&apos;m Saurabh. I&apos;m a developer who loves building things
          that simplify life. My passion is turning ideas into clean,
          functional solutions — whether it&apos;s a web app, a tool, or
          just a fun experiment.
        </p>
        <Link href="/projects" className="bento-link">
          View My Work
          <span className="arrow-icon">↗</span>
        </Link>
      </div>

      {/* Code Card - Top right accent */}
      <div className="bento-card bento-code">
        <pre className="bento-code-block">
{`class Developer:
  def __init__(self):
    self.name = "Saurabh"
    self.skills = [
      "Python", "C/C++",
      "JavaScript"
    ]

me = Developer()
print(me.name)`}
        </pre>
      </div>

      {/* CV Card */}
      <div className="bento-card bento-cv">
        <span className="cv-text">CV</span>
        <a href="/Resume.pdf" target="_blank" className="bento-download">
          Download <span className="download-arrow">↓</span>
        </a>
      </div>

      {/* Expertise Card */}
      <div className="bento-card bento-skills">
        <h3 className="bento-label">Expertise</h3>
        <div className="bento-tags">
          {skills.map((skill) => (
            <span className="bento-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Project Preview Cards */}
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bento-card bento-project"
        >
          <div className="project-preview-gradient"></div>
          <div className="project-preview-content">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="project-preview-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </a>
      ))}

      {/* Social Card */}
      <div className="bento-card bento-social">
        <a
          href="https://github.com/Saurabh-1785"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/saurabh-chauhan-a96413323/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="mailto:saurabhchauhan1785@gmail.com"
          aria-label="Email"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22 4L12 13L2 4"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
