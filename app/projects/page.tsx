const projects = [
  {
    title: "Interactive Tip Calculator",
    description:
      "A very effective platform to calculate Tip amount and its distribution among every individual.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    links: [
      {
        label: "Live Demo",
        href: "https://saurabh-1785.github.io/interactive-tip-calculator/",
      },
      {
        label: "View Code",
        href: "https://github.com/Saurabh-1785/interactive-tip-calculator",
      },
    ],
  },
  {
    title: "Alternate Site Designs",
    description:
      "Figma based alternate design for various websites like amazon, youtube, etc",
    tech: ["FIGMA"],
    links: [
      {
        label: "View",
        href: "https://www.figma.com/design/85sA25E2qpJEFeIbyxxelf/Alternate-design-sites?node-id=0-1&t=mPPWaAYJ0SUyhF9y-1",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Here are some of the projects I&apos;ve built recently</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tag) => (
                <span className="tech-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.links.map((link) => (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
