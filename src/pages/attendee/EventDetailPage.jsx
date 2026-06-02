import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  MapPin,
  Search,
  SlidersHorizontal,
  Share2,
  Calendar,
  Clock
} from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import './EventDetailPage.css';

const placeholderImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="960" height="560"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="%23f472b6"/><stop offset="100%" stop-color="%237e22ce"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g)"/><circle cx="70%" cy="35%" r="160" fill="%23ffffff" opacity="0.2"/><circle cx="30%" cy="70%" r="220" fill="%23ffffff" opacity="0.16"/></svg>';

const mockEvents = [
  {
    id: '1',
    title: 'Future of African Tech: Design, AI & Innovation',
    category: 'Technology',
    date: 'Saturday, June 20th 2026',
    time: '9:00 AM - 5:00 PM UTC',
    location: 'The Podium, Lekki Phase 1',
    address: '124 T.F. Kuboye Rd, Lekki Phase I, Lekki 106104, Lagos, Nigeria.',
    description:
      'Join designers, founders, developers and creators for a one-day experience of networking, innovation and future tech.',
    about:
      'Future of African Tech: Design, AI & Innovation is a one-day immersive experience bringing together designers, founders, developers, creators, and forward-thinking innovators to explore the future of technology in Africa.\n\nThis event is designed to spark meaningful conversations around product design, artificial intelligence, emerging technologies, startups, and digital innovation, while creating opportunities for collaboration, networking, and community building.\n\nWhether you\'re a creative, tech enthusiast, entrepreneur, or aspiring professional, expect inspiring keynote sessions, engaging panel discussions, live product showcases, and valuable connections with people actively shaping Africa\'s tech ecosystem.\n\nJoin us for a day of ideas, innovation, and future-focused conversations — where technology meets creativity and the future is built together.',
    image: placeholderImage
  },
  {
    id: '2',
    title: 'Design Systems for Emerging Markets',
    category: 'Technology',
    date: 'Saturday, July 4th 2026',
    time: '10:00 AM - 4:00 PM UTC',
    location: 'Landmark Event Center',
    address: 'Plot 2 & 3, Water Corporation Drive, Victoria Island, Lagos.',
    description: 'A deep dive into scalable design systems for fast-growing teams.',
    about: 'A practical, hands-on workshop for designers and PMs.',
    image: placeholderImage
  },
  {
    id: '3',
    title: 'AI for Product Leaders',
    category: 'Technology',
    date: 'Saturday, July 18th 2026',
    time: '9:30 AM - 3:30 PM UTC',
    location: 'The Podium, Lekki Phase 1',
    address: '124 T.F. Kuboye Rd, Lekki Phase I, Lekki 106104, Lagos, Nigeria.',
    description: 'Learn how product leaders are adopting AI across teams.',
    about: 'Keynotes, demos, and strategy sessions.',
    image: placeholderImage
  },
  {
    id: '4',
    title: 'Startup Growth Lab',
    category: 'Technology',
    date: 'Saturday, July 12th 2026',
    time: '10:00 AM - 4:00 PM UTC',
    location: 'Landmark Event Center',
    address: 'Plot 2 & 3, Water Corporation Drive, Victoria Island, Lagos.',
    description: 'Growth tactics, mentorship, and actionable playbooks for founders.',
    about: 'Workshops and networking with growth leaders.',
    image: placeholderImage
  },
  {
    id: '5',
    title: 'Creative AI for Designers',
    category: 'Technology',
    date: 'Saturday, August 2nd 2026',
    time: '12:00 PM - 4:30 PM UTC',
    location: 'The Podium, Lekki Phase 1',
    address: '124 T.F. Kuboye Rd, Lekki Phase I, Lekki 106104, Lagos, Nigeria.',
    description: 'Explore AI workflows for design and prototyping.',
    about: 'Hands-on sessions with practical demos.',
    image: placeholderImage
  },
  {
    id: '6',
    title: 'Product Strategy Summit',
    category: 'Technology',
    date: 'Saturday, August 16th 2026',
    time: '11:30 AM - 5:00 PM UTC',
    location: 'Eko Convention Center',
    address: 'Eko Hotel, Victoria Island, Lagos, Nigeria.',
    description: 'Strategic frameworks for product leadership and growth.',
    about: 'Keynotes, panels, and breakout rooms.',
    image: placeholderImage
  }
];

const relatedEvents = [
  {
    id: '4',
    title: 'Startup Growth Lab',
    category: 'Technology',
    date: '2026-07-12T09:00:00.000Z',
    location: 'Landmark Event Center',
    image: placeholderImage
  },
  {
    id: '5',
    title: 'Creative AI for Designers',
    category: 'Technology',
    date: '2026-08-02T11:00:00.000Z',
    location: 'The Podium, Lekki Phase 1',
    image: placeholderImage
  },
  {
    id: '6',
    title: 'Product Strategy Summit',
    category: 'Technology',
    date: '2026-08-16T10:30:00.000Z',
    location: 'Eko Convention Center',
    image: placeholderImage
  }
];

function formatRelatedDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function RelatedEventCard({ event }) {
  return (
    <Link to={`/events/${event.id}`} className="related-card">
      <div className="related-card-media">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="related-card-body">
        <span className="related-card-category">{event.category}</span>
        <h3>{event.title}</h3>
        <p>\ud83d\udcc5 {formatRelatedDate(event.date)}</p>
        <p>\ud83d\udccd {event.location}</p>
      </div>
    </Link>
  );
}

export default function EventDetailPage() {
  const { eventId } = useParams();
  const event = mockEvents.find(item => item.id === eventId);

  useEffect(() => {
    document.body.classList.add('event-detail-page');
    return () => document.body.classList.remove('event-detail-page');
  }, []);

  if (!event) {
    return (
      <div className="event-detail-page">
        <Navbar />
        <main className="event-detail-container">
          <div className="event-not-found">
            <h2>Event not found</h2>
            <p>We could not locate that event. Please explore upcoming events.</p>
            <Link to="/events" className="event-action">Back to Events</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="event-detail-page">
      <Navbar />
      <main className="event-detail-container">
        <section className="event-search">
          <button type="button" className="event-location">
            <MapPin size={16} /> Lagos, Nigeria
          </button>
          <div className="event-search-input">
            <Search size={16} />
            <input type="text" placeholder="Discover events by name, venue or artist...." />
          </div>
          <button type="button" className="event-filter" aria-label="Filter">
            <SlidersHorizontal size={16} />
          </button>
        </section>

        <section className="event-hero">
          <div className="event-hero-frame">
            <img src={event.image} alt={event.title} />
          </div>
        </section>

        <section className="event-meta">
          <span className="event-category">{event.category}</span>
          <button type="button" className="event-share">
            <Share2 size={16} /> Share
          </button>
        </section>

        <section className="event-content">
          <div className="event-main">
            <h1>{event.title}</h1>
            <p className="event-summary">{event.description}</p>

            <div className="event-about">
              <h2>About this event</h2>
              {event.about.split('\n\n').map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="event-ticket-card">
            <div className="ticket-row">
              <Calendar size={18} />
              <div>
                <strong>{event.date}</strong>
              </div>
            </div>
            <div className="ticket-row">
              <Clock size={18} />
              <div>
                <strong>{event.time}</strong>
              </div>
            </div>
            <div className="ticket-row">
              <MapPin size={18} />
              <div>
                <strong>{event.location}</strong>
              </div>
            </div>
            <Link to={`/checkout/${event.id}`} className="event-action">
              Get tickets
            </Link>
          </aside>
        </section>

        <section className="event-details">
          <h2>Event Details</h2>
          <div className="event-details-grid">
            <div className="event-info-card">
              <Calendar size={22} />
              <h3>Date</h3>
              <p>{event.date}</p>
              <span>1-Day Event</span>
            </div>
            <div className="event-info-card">
              <Clock size={22} />
              <h3>Time</h3>
              <p>{event.time}</p>
              <span>Doors Open 8:00 AM</span>
            </div>
            <div className="event-info-card">
              <MapPin size={22} />
              <h3>Location</h3>
              <p>{event.location}</p>
              <span>{event.address}</span>
            </div>
          </div>
        </section>

        <section className="event-related">
          <h2>Related Events</h2>
          <div className="event-related-grid">
            {relatedEvents.map(related => (
              <RelatedEventCard key={related.id} event={related} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
