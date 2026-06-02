import { motion } from 'framer-motion';

const featuredCards = [
  {
    title: 'Neon Beats Festival',
    subtitle: 'Live Stage',
    tone: 'card-tone-a'
  },
  {
    title: 'City Lights Gala',
    subtitle: 'Rooftop Night',
    tone: 'card-tone-b'
  },
  {
    title: 'Acoustic Session',
    subtitle: 'Indie Lounge',
    tone: 'card-tone-c'
  }
];

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-blob hero-blob-left" />
      <div className="hero-blob hero-blob-right" />
      <div className="home-container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hero-text"
        >
          <span className="hero-tag">Evently</span>
          <h1>
            Turn Moments Into Memory
            <span> Seamlessly</span>
          </h1>
          <p>
            The seamless way to discover, book, and experience the events that matter. Curate
            moments, manage tickets, and celebrate together.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-ghost">Learn More</button>
          </div>
        </motion.div>
        <motion.div
          className="hero-cards"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } }
          }}
        >
          {featuredCards.map(card => (
            <motion.div
              key={card.title}
              className={`hero-card ${card.tone}`}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            >
              <div className="hero-card-image" />
              <div className="hero-card-body">
                <h3>{card.title}</h3>
                <span>{card.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
