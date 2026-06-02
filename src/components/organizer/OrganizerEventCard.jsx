import { Link } from 'react-router-dom';
import { Eye, MoreVertical, MapPin, Calendar } from 'lucide-react';

export default function OrganizerEventCard({ event }) {
  return (
    <div className="org-event-card">
      <div className="org-event-media">
        <span className="org-event-dot" />
        <div className="org-event-art" />
      </div>
      <div className="org-event-info">
        <h3>{event.title}</h3>
        <div className="org-event-meta">
          <span><MapPin size={14} /> {event.location}</span>
          <span><Calendar size={14} /> {event.date}</span>
        </div>
      </div>
      <div className="org-event-actions">
        <Link to={`/organizer/events/${event.id}`} className="org-event-view">
          <Eye size={16} /> view
        </Link>
        <div className="org-event-more">
          <MoreVertical size={16} />
          <span>More options</span>
        </div>
      </div>
    </div>
  );
}
