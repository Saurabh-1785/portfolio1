export default function ContactPage() {
  return (
    <div className="contact-content">
      <h2>Let&apos;s Work Together</h2>
      <p>
        I&apos;m always interested in new opportunities and exciting projects.
        Whether you have a question, want to collaborate, or just want to say
        hi, I&apos;d love to hear from you!
      </p>

      <div className="contact-methods">
        <div className="contact-item">
          <h3>📧 Email</h3>
          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=saurabhchauhan1785@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Saurabh,%0D%0AI%20saw%20your%20portfolio%20and..."
              target="_blank"
              rel="noopener noreferrer"
            >
              saurabhchauhan1785@gmail.com
            </a>
          </p>
          <p>Best way to reach me for project inquiries</p>
        </div>

        <div className="contact-item">
          <h3>💼 LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/saurabh-chauhan-a96413323/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with me
            </a>
          </p>
          <p>Professional networking and career opportunities</p>
        </div>

        <div className="contact-item">
          <h3>🐙 GitHub</h3>
          <p>
            <a
              href="https://github.com/Saurabh-1785"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check my code
            </a>
          </p>
          <p>Open source contributions and personal projects</p>
        </div>

        <div className="contact-item">
          <h3>🚀 Status</h3>
          <p style={{ color: "#667eea" }}>
            <strong>Available for freelance</strong>
          </p>
          <p>Open to new projects and collaborations</p>
        </div>
      </div>

      <div className="cta-buttons">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=saurabhchauhan1785@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Saurabh,%0D%0AI%20saw%20your%20portfolio%20and..."
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          📩 Send Email
        </a>
        <a href="/Resume.pdf" target="_blank" className="btn">
          📄 Download Resume
        </a>
      </div>
    </div>
  );
}
