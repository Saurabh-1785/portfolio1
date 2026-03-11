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
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-3 text-foreground">
          My Projects
        </h2>
        <p className="text-muted text-base">
          Here are some of the projects I&apos;ve built recently
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            className="bg-card border-[1.5px] border-edge rounded-[20px] p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_var(--shadow)] hover:border-edge-hover"
            key={project.title}
          >
            <h3 className="text-xl font-bold mb-3 text-foreground">
              {project.title}
            </h3>
            <p className="text-muted mb-5 text-[15px] leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-2.5 flex-wrap mb-5">
              {project.tech.map((tag) => (
                <span
                  className="bg-card-alt text-secondary px-3.5 py-1.5 rounded-3xl text-xs font-semibold border-[1.5px] border-edge transition-all duration-200 hover:bg-btn hover:text-btn-text hover:border-btn hover:cursor-pointer"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.links.map((link) => (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-5 bg-transparent border-[1.5px] border-foreground text-foreground no-underline rounded-3xl text-[13px] font-semibold transition-all duration-200 hover:bg-foreground hover:text-page focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
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
