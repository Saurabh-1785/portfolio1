export default function ContactPage() {
  return (
    <div className="max-w-[800px] mx-auto text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-foreground">
        Let&apos;s Work Together
      </h2>
      <p className="text-base mb-10 leading-[1.8] text-muted">
        I&apos;m always interested in new opportunities and exciting projects.
        Whether you have a question, want to collaborate, or just want to say
        hi, I&apos;d love to hear from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <div className="bg-card p-7 rounded-[20px] border-[1.5px] border-edge transition-all duration-200 overflow-x-hidden text-left hover:-translate-y-[3px] hover:border-edge-hover hover:shadow-[0_8px_24px_var(--shadow-sm)]">
          <h3 className="text-lg font-bold mb-3 text-foreground">📧 Email</h3>
          <p className="mb-2 text-sm text-muted">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=saurabhchauhan1785@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Saurabh,%0D%0AI%20saw%20your%20portfolio%20and..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline font-semibold hover:underline"
            >
              saurabhchauhan1785@gmail.com
            </a>
          </p>
          <p className="mb-2 text-sm text-muted">
            Best way to reach me for project inquiries
          </p>
        </div>

        <div className="bg-card p-7 rounded-[20px] border-[1.5px] border-edge transition-all duration-200 overflow-x-hidden text-left hover:-translate-y-[3px] hover:border-edge-hover hover:shadow-[0_8px_24px_var(--shadow-sm)]">
          <h3 className="text-lg font-bold mb-3 text-foreground">
            💼 LinkedIn
          </h3>
          <p className="mb-2 text-sm text-muted">
            <a
              href="https://www.linkedin.com/in/saurabh-chauhan-a96413323/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline font-semibold hover:underline"
            >
              Connect with me
            </a>
          </p>
          <p className="mb-2 text-sm text-muted">
            Professional networking and career opportunities
          </p>
        </div>

        <div className="bg-card p-7 rounded-[20px] border-[1.5px] border-edge transition-all duration-200 overflow-x-hidden text-left hover:-translate-y-[3px] hover:border-edge-hover hover:shadow-[0_8px_24px_var(--shadow-sm)]">
          <h3 className="text-lg font-bold mb-3 text-foreground">🐙 GitHub</h3>
          <p className="mb-2 text-sm text-muted">
            <a
              href="https://github.com/Saurabh-1785"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline font-semibold hover:underline"
            >
              Check my code
            </a>
          </p>
          <p className="mb-2 text-sm text-muted">
            Open source contributions and personal projects
          </p>
        </div>

        <div className="bg-card p-7 rounded-[20px] border-[1.5px] border-edge transition-all duration-200 overflow-x-hidden text-left hover:-translate-y-[3px] hover:border-edge-hover hover:shadow-[0_8px_24px_var(--shadow-sm)]">
          <h3 className="text-lg font-bold mb-3 text-foreground">🚀 Status</h3>
          <p className="mb-2 text-sm text-accent">
            <strong>Available for freelance</strong>
          </p>
          <p className="mb-2 text-sm text-muted">
            Open to new projects and collaborations
          </p>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=saurabhchauhan1785@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Saurabh,%0D%0AI%20saw%20your%20portfolio%20and..."
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-7 border-[1.5px] border-foreground bg-transparent text-foreground no-underline rounded-3xl text-sm font-semibold cursor-pointer transition-all duration-200 inline-flex items-center gap-2 hover:bg-foreground hover:text-page focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          📩 Send Email
        </a>
        <a
          href="/Resume.pdf"
          target="_blank"
          className="py-3 px-7 border-[1.5px] border-foreground bg-transparent text-foreground no-underline rounded-3xl text-sm font-semibold cursor-pointer transition-all duration-200 inline-flex items-center gap-2 hover:bg-foreground hover:text-page focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
}
