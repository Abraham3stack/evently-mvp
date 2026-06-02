const plans = [
  {
    name: 'Attendee Free',
    price: 'Free',
    description: 'Best for personal ticketing.',
    features: ['Unlimited event discovery', 'Standard support', 'Mobile ticket access'],
    highlight: false
  },
  {
    name: 'VIP Weekend',
    price: '$149.00',
    description: 'Great for premium events.',
    features: ['Priority seating', 'Fast-track entry', 'Concierge support'],
    highlight: true
  },
  {
    name: 'Business Access',
    price: '$350.00',
    description: 'For brands and partners.',
    features: ['Sponsor placement', 'Premium analytics', 'Dedicated success manager'],
    highlight: false
  }
];

export default function PricingSection() {
  return (
    <section className="pricing" id="pricing">
      <div className="home-container">
        <div className="section-heading center">
          <h2>Transparent Pricing. No Hidden Surprises.</h2>
          <p>Pick the plan that matches your next event experience.</p>
        </div>
        <div className="pricing-grid">
          {plans.map(plan => (
            <div key={plan.name} className={`price-card ${plan.highlight ? 'highlight' : ''}`}>
              <div className="price-header">
                <h3>{plan.name}</h3>
                <span>{plan.description}</span>
              </div>
              <div className="price">
                {plan.price}
                <span>/event</span>
              </div>
              <ul>
                {plan.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
