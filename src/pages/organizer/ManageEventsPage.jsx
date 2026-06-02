import { useEffect } from 'react';
import OrganizerTopbar from '@/components/organizer/OrganizerTopbar';
import OrganizerSidebar from '@/components/organizer/OrganizerSidebar';
import OrganizerFilters from '@/components/organizer/OrganizerFilters';
import OrganizerEventCard from '@/components/organizer/OrganizerEventCard';
import './ManageEventsPage.css';
import './OrganizerDashboard.css';

const events = Array.from({ length: 6 }).map((_, index) => ({
  id: index + 1,
  title: 'Tech Culture Fest',
  location: '7529 E. Pecan St.',
  date: '17 Oct, 2020'
}));

export default function ManageEventsPage() {
  useEffect(() => {
    document.body.classList.add('organizer-manage-events');
    return () => document.body.classList.remove('organizer-manage-events');
  }, []);

  return (
    <div className="organizer-manage-events">
      <OrganizerTopbar />
      <div className="org-layout">
        <OrganizerSidebar activeItem="Manage Events" />
        <main className="org-content">
          <div className="org-manage-title">
            <h1>Event Management Section</h1>
          </div>
          <OrganizerFilters />
          <div className="org-events">
            <h2>All Events</h2>
            <div className="org-event-grid">
              {events.map(event => (
                <OrganizerEventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
