import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Pencil,
  MapPin,
  Calendar,
  Clock,
  Ticket,
  Users,
  Tag,
  Star
} from 'lucide-react';
import OrganizerTopbar from '@/components/organizer/OrganizerTopbar';
import OrganizerSidebar from '@/components/organizer/OrganizerSidebar';
import OrganizerFilters from '@/components/organizer/OrganizerFilters';
import './ManageEventPage.css';
import './ManageEventsPage.css';
import './OrganizerDashboard.css';

const mockEvents = [
  {
    id: '1',
    title: 'Tech Culture Fest',
    date: '2025-07-12',
    venue: '7529 E. Pecan St.',
    time: '19:00:00',
    description:
      'Tech Culture Fest is a vibrant gathering of innovators, creators, and tech enthusiasts, celebrating technology, creativity, learning, networking, innovation, and digital culture through engaging experiences.',
    ticketPrice: '2500NGR',
    seatAmount: '1200',
    availableSeats: '523',
    tags: '#Music, #Festival',
    expectedAttendance: '+1000',
    popularity: 'High Popularity'
  },
  {
    id: '2',
    title: 'Tech Culture Fest',
    date: '2025-07-12',
    venue: '7529 E. Pecan St.',
    time: '19:00:00',
    description:
      'Tech Culture Fest is a vibrant gathering of innovators, creators, and tech enthusiasts, celebrating technology, creativity, learning, networking, innovation, and digital culture through engaging experiences.',
    ticketPrice: '2500NGR',
    seatAmount: '1200',
    availableSeats: '523',
    tags: '#Music, #Festival',
    expectedAttendance: '+1000',
    popularity: 'High Popularity'
  }
];

function DetailField({ label, value, icon }) {
  return (
    <div className="org-field">
      <label>{label}</label>
      <div className="org-field-box">
        <span>{value}</span>
        <span className="icon">{icon}</span>
      </div>
    </div>
  );
}

export default function ManageEventPage() {
  const { eventId } = useParams();
  const event = mockEvents.find(item => item.id === eventId);

  useEffect(() => {
    document.body.classList.add('organizer-manage-event');
    return () => document.body.classList.remove('organizer-manage-event');
  }, []);

  if (!event) {
    return (
      <div className="organizer-manage-event">
        <OrganizerTopbar />
        <div className="org-layout">
          <OrganizerSidebar activeItem="Manage Events" />
          <main className="org-content">
            <div className="org-not-found">
              <h2>Event not found</h2>
              <p>We could not locate that event. Please return to the events list.</p>
              <Link to="/organizer/events">Back to Manage Events</Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="organizer-manage-event">
      <OrganizerTopbar />
      <div className="org-layout">
        <OrganizerSidebar activeItem="Manage Events" />
        <main className="org-content">
          <div className="org-details-header">
            <h1>Event Management Section</h1>
          </div>

          <OrganizerFilters />

          <section className="org-details-grid">
            <div className="org-details-card">
              <div className="org-details-dot" />
              <div className="org-details-edit">
                <Pencil size={16} />
              </div>
              <div className="org-details-image" />
            </div>

            <div className="org-detail-fields">
              <DetailField label="Event Name" value={event.title} icon={<Pencil size={16} />} />
              <div className="org-detail-row">
                <DetailField label="Event Date" value={event.date} icon={<Calendar size={16} />} />
                <DetailField label="Event Time" value={event.time} icon={<Clock size={16} />} />
              </div>
              <DetailField label="Event Venue" value={event.venue} icon={<MapPin size={16} />} />
            </div>
          </section>

          <section className="org-description">
            <label>Event Description</label>
            <div className="org-description-box">{event.description}</div>
          </section>

          <section className="org-bottom-grid">
            <DetailField label="Ticket Price" value={event.ticketPrice} icon={<Ticket size={16} />} />
            <DetailField label="Seat Amount" value={event.seatAmount} icon={<Users size={16} />} />
            <DetailField label="Available Seats" value={event.availableSeats} icon={<Users size={16} />} />
            <DetailField label="Tags" value={event.tags} icon={<Tag size={16} />} />
            <DetailField label="Expected Attendance" value={event.expectedAttendance} icon={<Users size={16} />} />
            <DetailField label="Popularity" value={event.popularity} icon={<Star size={16} />} />
          </section>
        </main>
      </div>
    </div>
  );
}
