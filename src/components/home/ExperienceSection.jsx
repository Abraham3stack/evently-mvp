import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Smart Ticketing',
    text: 'Secure QR tickets, dynamic tiers, and instant delivery built in.'
  },
  {
    title: 'Audience Insights',
    text: 'Track sales, scan rate, and engagement in real time.'
  },
  {
    title: 'Creator Tools',
    text: 'Design pages, promo flows, and email outreach in minutes.'
  }
];

const secondary = [
  {
    title: 'Attendee Focus',
    text: 'Personalized recommendations that highlight what matters.'
  },
  {
    title: 'Organizer Ready',
    text: 'Launch events with payments, tiers, and analytics baked in.'
  },
  {
    title: 'Secure Entry',
    text: 'Instant QR verification keeps lines short and safe.'
  }
];

export default function ExperienceSection() {
  return (
    <section className="experience" id="how-it-works">
      <div className="home-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-heading"
        >
          <span className="section-tag">Designed for the ultimate experience</span>
          <h2>Built for Future of Life Experience</h2>
          <p>
            Evently gives you a future-forward toolkit to plan, launch, and attend events with
            confidence. Every touchpoint is optimized for joy.
          </p>
        </motion.div>

        <div className="experience-grid">
          {benefits.map(item => (
            <div key={item.title} className="experience-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="experience-grid secondary">
          {secondary.map(item => (
            <div key={item.title} className="experience-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
