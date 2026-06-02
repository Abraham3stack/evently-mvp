export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="home-container contact-grid">
        <div className="contact-left">
          <h2>We are here to help</h2>
          <p>
            Tell us about your event and our team will help you craft an unforgettable experience.
          </p>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <label htmlFor="name">Full name</label>
            <input id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="form-row">
            <span className="label">Event type</span>
            <div className="option-grid">
              <label><input type="checkbox" /> Concert</label>
              <label><input type="checkbox" /> Conference</label>
              <label><input type="checkbox" /> Wedding</label>
              <label><input type="checkbox" /> Community</label>
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Tell us about your event" />
          </div>
          <button type="submit" className="btn btn-primary">Submit Message</button>
        </form>
      </div>
    </section>
  );
}
