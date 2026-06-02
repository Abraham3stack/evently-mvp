import { Search, ChevronDown, Calendar } from 'lucide-react';

export default function OrganizerFilters() {
  return (
    <div className="org-manage-header">
      <div className="org-actions">
        <button type="button" className="org-btn org-btn-primary">
          + New Event
        </button>
        <button type="button" className="org-btn org-btn-outline org-btn-pill">
          Attendee Insights <ChevronDown size={16} />
        </button>
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
