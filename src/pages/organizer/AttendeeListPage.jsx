import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Download } from 'lucide-react';
import OrganizerTopbar from '@/components/organizer/OrganizerTopbar';
import OrganizerSidebar from '@/components/organizer/OrganizerSidebar';
import './AttendeeListPage.css';
import './ManageEventsPage.css';
import './OrganizerDashboard.css';

const summaryCards = [
  { label: 'Total Attendees', value: '980' },
  { label: 'Checked In', value: '642' },
  { label: 'Pending Check-in', value: '338' },
  { label: 'VIP Guests', value: '140' }
];

const initialAttendees = [
  {
    id: 1,
    name: 'Lucy Daniels',
    email: 'lucydan@gmail.com',
    phone: '+2348173988044',
    ticketType: 'VIP',
    ticketId: '#A7B294ED',
    paymentStatus: 'Paid',
    checkInStatus: 'Not checked in'
  },
  {
    id: 2,
    name: 'Ahmed Bello',
    email: 'ahmed.bello@gmail.com',
    phone: '+2348012346789',
    ticketType: 'General Admission',
    ticketId: '#B2C194EE',
    paymentStatus: 'Paid',
    checkInStatus: 'Checked in'
  },
  {
    id: 3,
    name: 'Chioma Obi',
    email: 'chioma.obi@gmail.com',
    phone: '+2348092345678',
    ticketType: 'Early Bird',
    ticketId: '#C9D184AC',
    paymentStatus: 'Pending',
    checkInStatus: 'Not checked in'
  },
  {
    id: 4,
    name: 'Tomi Adebayo',
    email: 'tomi.adebayo@gmail.com',
    phone: '+2348123345566',
    ticketType: 'VIP',
    ticketId: '#J7K284TT',
    paymentStatus: 'Paid',
    checkInStatus: 'Not checked in'
  },
  {
    id: 5,
    name: 'Maya Idris',
    email: 'maya.idris@gmail.com',
    phone: '+2348162299981',
    ticketType: 'General Admission',
    ticketId: '#H7L284AF',
    paymentStatus: 'Paid',
    checkInStatus: 'Checked in'
  },
  {
    id: 6,
    name: 'Samuel Ayo',
    email: 'samuel.ayo@gmail.com',
    phone: '+2348071182233',
    ticketType: 'Early Bird',
    ticketId: '#P2S884GF',
    paymentStatus: 'Pending',
    checkInStatus: 'Not checked in'
  },
  {
    id: 7,
    name: 'Nina Osei',
    email: 'nina.osei@gmail.com',
    phone: '+2348134456700',
    ticketType: 'VIP',
    ticketId: '#K4Y114AA',
    paymentStatus: 'Paid',
    checkInStatus: 'Checked in'
  },
  {
    id: 8,
    name: 'Peter Okoro',
    email: 'peter.okoro@gmail.com',
    phone: '+2348090001234',
    ticketType: 'General Admission',
    ticketId: '#W8J224CC',
    paymentStatus: 'Paid',
    checkInStatus: 'Not checked in'
  }
];

export default function AttendeeListPage() {
  const { eventId } = useParams();
  const [search, setSearch] = useState('');
  const [ticketFilter, setTicketFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [attendees, setAttendees] = useState(initialAttendees);

  useEffect(() => {
    document.body.classList.add('organizer-attendees');
    return () => document.body.classList.remove('organizer-attendees');
  }, []);

  const filteredAttendees = useMemo(() => {
    return attendees.filter(attendee => {
      const matchesSearch = [
        attendee.name,
        attendee.email,
        attendee.phone,
        attendee.ticketId
      ].some(value => value.toLowerCase().includes(search.toLowerCase()));

      const matchesTicket = ticketFilter === 'All' || attendee.ticketType === ticketFilter;
      const matchesStatus = statusFilter === 'All' || attendee.checkInStatus === statusFilter;
      return matchesSearch && matchesTicket && matchesStatus;
    });
  }, [attendees, search, ticketFilter, statusFilter]);

  const handleCheckIn = id => {
    setAttendees(prev => prev.map(attendee => (
      attendee.id === id
        ? { ...attendee, checkInStatus: 'Checked in' }
        : attendee
    )));
  };

  return (
    <div className="organizer-attendees">
      <OrganizerTopbar />
      <div className="org-layout">
        <OrganizerSidebar activeItem="Manage Events" />
        <main className="org-content">
          <div className="org-manage-title">
            <h1>Attendee List</h1>
          </div>

          <section className="attendee-summary">
            {summaryCards.map(card => (
              <div key={card.label} className="attendee-card">
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </div>
            ))}
          </section>

          <div className="attendee-controls">
            <div className="org-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search attendee by name, email, or phone"
                value={search}
                onChange={event => setSearch(event.target.value)}
              />
            </div>
            <div className="attendee-filters">
              <label className="attendee-select">
                Ticket Type
                <select value={ticketFilter} onChange={event => setTicketFilter(event.target.value)}>
                  <option value="All">All</option>
                  <option value="VIP">VIP</option>
                  <option value="General Admission">General Admission</option>
                  <option value="Early Bird">Early Bird</option>
                </select>
              </label>
              <label className="attendee-select">
                Status
                <select value={statusFilter} onChange={event => setStatusFilter(event.target.value)}>
                  <option value="All">All</option>
                  <option value="Checked in">Checked in</option>
                  <option value="Not checked in">Not checked in</option>
                </select>
              </label>
              <button type="button" className="org-btn org-btn-outline org-btn-pill">
                <Download size={14} /> Export
              </button>
            </div>
          </div>

          <div className="attendee-table-wrap">
            <table className="attendee-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Ticket Type</th>
                  <th>Ticket ID</th>
                  <th>Payment Status</th>
                  <th>Check-in Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAttendees.map(attendee => (
                  <tr key={attendee.id}>
                    <td>{attendee.name}</td>
                    <td>{attendee.email}</td>
                    <td>{attendee.phone}</td>
                    <td>{attendee.ticketType}</td>
                    <td>{attendee.ticketId}</td>
                    <td>
                      <span className={`status-pill ${attendee.paymentStatus === 'Paid' ? 'paid' : 'pending'}`}>
                        {attendee.paymentStatus}
                      </span>
                    </td>
                    <td>
                      <span className={`status-pill ${attendee.checkInStatus === 'Checked in' ? 'checked' : ''}`}>
                        {attendee.checkInStatus}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="attendee-action"
                        onClick={() => handleCheckIn(attendee.id)}
                      >
                        Mark Checked In
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '12px', color: '#6b7280' }}>Event ID: {eventId}</p>
        </main>
      </div>
    </div>
  );
}
