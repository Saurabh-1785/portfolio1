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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
      <div className="text-base leading-[1.8]">
        <h2 className="text-4xl font-extrabold mb-5 text-foreground">
          About Me
        </h2>
        <p className="mb-5 text-secondary">
          Hi! I&apos;m Saurabh Chauhan, a passionate and curious learner with a
          love for technology and problem-solving. I have{" "}
          <span className="text-accent font-semibold">Python</span>,
          <span className="text-accent font-semibold">C/C++</span> and{" "}
          <span className="text-accent font-semibold">JavaScript</span>{" "}
          experience, and I love creating things that simplify life or make it
          more fun.
        </p>
        <p className="mb-5 text-secondary">
          I&apos;m constantly discovering new concepts, acquiring new skills, and
          challenging myself to become a better person — whether through coding,
          giving back to projects, or learning about how things work.
        </p>
        <p className="mb-5 text-secondary">
          Thanks for visiting — feel free to explore my work!
        </p>
      </div>

      <div className="bg-card p-[30px] rounded-[20px] border-[1.5px] border-edge transition-colors duration-300">
        <h3 className="text-xl font-bold mb-5 text-foreground">Tech Stack</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3">
          {skills.map((skill) => (
            <div
              className="bg-card-alt p-3.5 rounded-xl text-center border-[1.5px] border-edge transition-all duration-200 text-sm hover:bg-btn hover:text-btn-text hover:border-btn hover:cursor-pointer"
              key={skill}
            >
              <strong>{skill}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
