const steps = [
  {
    title: 'Launch Your Profile',
    text: 'Set up your organizer page, logo, and payout details in minutes.'
  },
  {
    title: 'Draft & Publish',
    text: 'Design ticket tiers, publish your event, and share instantly.'
  },
  {
    title: 'Scan & Analyze',
    text: 'Track entry data, revenue, and engagement in real time.'
  }
];

export default function OrganizerSteps() {
  return (
    <section className="organizer-steps">
      <div className="organizer-blob" />
      <div className="home-container organizer-grid">
        <div>
          <h2>For Organizers: Blueprint to Bank Account</h2>
          <p>
            Plan, launch, and profit with end-to-end support. Evently keeps you focused on
            delivering unforgettable experiences.
          </p>
        </div>
        <div className="steps-stack">
          {steps.map((step, index) => (
            <div key={step.title} className="step-card light">
              <span className="step-number">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
