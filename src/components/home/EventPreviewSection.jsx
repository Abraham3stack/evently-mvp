import { motion } from 'framer-motion';

const categories = ['Music', 'Tech', 'Fashion', 'Sports', 'Faith', 'Food', 'Art', 'Comedy'];

const upcomingEvents = [
  { title: 'Skyline Concert', date: 'Sat, 12 Aug', tone: 'event-card-a' },
  { title: 'Design Meetup', date: 'Mon, 14 Aug', tone: 'event-card-b' },
  { title: 'Gospel Night', date: 'Fri, 18 Aug', tone: 'event-card-c' },
  { title: 'Summer Pop-up', date: 'Sun, 20 Aug', tone: 'event-card-d' }
];

const trendingEvents = [
  { title: 'Tech Summit', date: 'Wed, 30 Aug', tone: 'event-card-b' },
  { title: 'Art Exhibition', date: 'Fri, 1 Sep', tone: 'event-card-d' },
  { title: 'Live Comedy', date: 'Sat, 2 Sep', tone: 'event-card-a' },
  { title: 'Startup Pitch', date: 'Sun, 3 Sep', tone: 'event-card-c' }
];

function EventRow({ title, items }) {
  return (
    <div className="event-row">
      <div className="row-header">
        <h3>{title}</h3>
        <button className="row-link">See all</button>
      </div>
      <div className="row-cards">
        {items.map(item => (
          <div key={item.title} className={`event-card ${item.tone}`}>
            <div className="event-card-media" />
            <div className="event-card-body">
              <h4>{item.title}</h4>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EventPreviewSection() {
  return (
    <section className="event-preview" id="events">
      <div className="home-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="search-bar"
        >
          <div className="search-input">
            <span className="search-icon" />
            <input type="text" placeholder="Search for events, categories, or locations" />
          </div>
          <button className="btn btn-primary btn-small">Search</button>
        </motion.div>

        <div className="category-row">
          {categories.map(category => (
            <button key={category} className="pill">
              {category}
            </button>
          ))}
        </div>

        <EventRow title="Upcoming Events" items={upcomingEvents} />
        <EventRow title="Trending Events" items={trendingEvents} />
      </div>
    </section>
  );
}
