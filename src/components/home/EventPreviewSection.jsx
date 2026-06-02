import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = ['Music', 'Tech', 'Fashion', 'Sports', 'Faith', 'Food', 'Art', 'Comedy'];

const upcomingEvents = [
  { id: '1', title: 'Skyline Concert', date: 'Sat, 12 Aug', tone: 'event-card-a' },
  { id: '2', title: 'Design Meetup', date: 'Mon, 14 Aug', tone: 'event-card-b' },
  { id: '3', title: 'Gospel Night', date: 'Fri, 18 Aug', tone: 'event-card-c' },
  { id: '4', title: 'Summer Pop-up', date: 'Sun, 20 Aug', tone: 'event-card-d' }
];

const trendingEvents = [
  { id: '5', title: 'Tech Summit', date: 'Wed, 30 Aug', tone: 'event-card-b' },
  { id: '6', title: 'Art Exhibition', date: 'Fri, 1 Sep', tone: 'event-card-d' },
  { id: '7', title: 'Live Comedy', date: 'Sat, 2 Sep', tone: 'event-card-a' },
  { id: '8', title: 'Startup Pitch', date: 'Sun, 3 Sep', tone: 'event-card-c' }
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
          <Link key={item.id} to={`/events/${item.id}`} className={`event-card ${item.tone}`}>
            <div className="event-card-media" />
            <div className="event-card-body">
              <h4>{item.title}</h4>
              <span>{item.date}</span>
            </div>
          </Link>
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
