const steps = [
  {
    title: 'Explore & Match',
    text: 'Discover curated events tailored to your interests.'
  },
  {
    title: 'Rapid Checkout',
    text: 'Secure seats instantly with a streamlined payment flow.'
  },
  {
    title: 'Smart Entry',
    text: 'Scan your QR ticket and walk right in.'
  }
];

export default function AttendeeSteps() {
  return (
    <section className="attendee-steps">
      <div className="home-container attendee-grid">
        <div className="phone-mock">
          <div className="phone-header">
            <span className="phone-dot" />
            <span className="phone-dot" />
            <span className="phone-dot" />
          </div>
          <div className="ticket-block">
            <h4>Evently Ticket</h4>
            <p>VIP Lounge</p>
            <div className="qr" />
            <span className="ticket-id">Ticket ID: EVT-2309</span>
          </div>
        </div>

        <div className="steps-content">
          <h2>For Attendees: Discover to Doorstep</h2>
          <p>
            From discovery to entry, Evently keeps everything simple. One tap, one ticket, one
            unforgettable experience.
          </p>
          <div className="steps-list">
            {steps.map((step, index) => (
              <div key={step.title} className="step-card">
                <span className="step-number">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
