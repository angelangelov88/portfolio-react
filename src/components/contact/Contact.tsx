const Contact = () => (
  <div id="contact" className="contact-page">
    <div className="contact-hero">
      <div className="contact-hero-overlay" />
      <h1>Get In Touch</h1>
    </div>

    <div className="contact-body">
      <p className="contact-intro">
        Interested in working together or have a question? I'd love to hear from you.
        Reach out via any of the options below and I'll get back to you as soon as I can.
      </p>

      <div className="contact-cards">
        <a href="tel:07553692967" className="contact-card">
          <i className="fas fa-phone contact-card-icon" />
          <span className="contact-card-label">Phone</span>
          <span className="contact-card-value">07553 692 967</span>
        </a>

        <a href="mailto:ang.angelov88@gmail.com" className="contact-card">
          <i className="fas fa-envelope contact-card-icon" />
          <span className="contact-card-label">Email</span>
          <span className="contact-card-value">ang.angelov88@gmail.com</span>
        </a>

        <a href="https://www.linkedin.com/in/ang-angelov/" target="_blank" rel="noreferrer" className="contact-card">
          <i className="fab fa-linkedin-in contact-card-icon" />
          <span className="contact-card-label">LinkedIn</span>
          <span className="contact-card-value">ang-angelov</span>
        </a>

        <a href="https://github.com/angelangelov88" target="_blank" rel="noreferrer" className="contact-card">
          <i className="fab fa-github contact-card-icon" />
          <span className="contact-card-label">GitHub</span>
          <span className="contact-card-value">angelangelov88</span>
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
