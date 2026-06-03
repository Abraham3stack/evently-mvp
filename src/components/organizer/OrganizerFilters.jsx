import { Link } from 'react-router-dom';
import { Search, ChevronDown, Calendar } from 'lucide-react';

export default function OrganizerFilters({ insightsLink }) {
  return (
    <div className="org-manage-header">
      <div className="org-actions">
        <Link to="/organizer/create-event" className="org-btn org-btn-primary">
          + New Event
        </Link>
        {insightsLink ? (
          <Link to={insightsLink} className="org-btn org-btn-outline org-btn-pill">
            Attendee Insights <ChevronDown size={16} />
          </Link>
        ) : (
          <button type="button" className="org-btn org-btn-outline org-btn-pill">
            Attendee Insights <ChevronDown size={16} />
          </button>
        )}
      </div>
      <div className="org-controls">
        <div className="org-search">
          <Search size={16} />
          <input type="text" placeholder="Search ..." />
        </div>
        <button type="button" className="org-btn org-btn-outline org-btn-pill">
          Sort By: <span>Status</span> <ChevronDown size={14} />
        </button>
        <button type="button" className="org-btn org-btn-outline org-btn-pill">
          <Calendar size={14} /> Pick Date
        </button>
      </div>
    </div>
  );
}
