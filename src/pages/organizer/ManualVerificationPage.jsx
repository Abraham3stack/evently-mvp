import { useEffect, useState } from 'react';
import {
  MapPin,
  Calendar,
  ChevronDown,
  Search,
  CheckCircle2,
  XCircle,
  Home,
  Compass,
  Ticket,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import OrganizerTopbar from '@/components/organizer/OrganizerTopbar';
import OrganizerSidebar from '@/components/organizer/OrganizerSidebar';
import VerificationSearchPanel from '@/components/organizer/VerificationSearchPanel';
import AttendeeVerificationCard from '@/components/organizer/AttendeeVerificationCard';
import EntryHistoryCard from '@/components/organizer/EntryHistoryCard';
import './ManualVerificationPage.css';
import './ManageEventsPage.css';
import './OrganizerDashboard.css';

const eventSummary = {
  title: 'Lagos Trade fair, 2026',
  location: 'Lagos, Nigeria',
  status: 'Online'
};

const attendee = {
  name: 'Lucy Daniels',
  email: 'lucydan@gmail.com',
  phone: '+2348173988044',
  ticketType: 'VIP Access',
  ticketId: '#A7B294ED'
};

const defaultHistory = [
  { time: '7:42 PM', note: 'QR scan failed' },
  { time: '7:44 PM', note: 'Manual verification approved' }
];

export default function ManualVerificationPage() {
  const [status, setStatus] = useState('not_checked');
  const [history, setHistory] = useState(defaultHistory);

  useEffect(() => {
    document.body.classList.add('organizer-verify');
    return () => document.body.classList.remove('organizer-verify');
  }, []);

  const handleSearch = () => {
    setStatus('not_checked');
  };

  const handleScan = () => {
    alert('QR scanner coming soon');
  };

  const handleApprove = () => {
    setStatus('checked_in');
    setHistory(prev => [{ time: '7:45 PM', note: 'Entry approved' }, ...prev]);
  };

  const handleReject = () => {
    setStatus('rejected');
    setHistory(prev => [{ time: '7:45 PM', note: 'Entry rejected' }, ...prev]);
  };

  const validationMessage = status === 'checked_in'
    ? 'Ticket is checked in'
    : status === 'rejected'
      ? 'This ticket has been rejected'
      : 'This ticket is valid for entry';

  const validationSubtext = status === 'checked_in'
    ? 'Entry has been approved'
    : status === 'rejected'
      ? 'Ticket cannot be used for entry'
      : 'Ticket has not been used yet';

  return (
    <div className="organizer-verify">
      <OrganizerTopbar />
      <div className="org-layout verify-layout">
        <OrganizerSidebar activeItem="Verify" />
        <main className="org-content">
          <div className="org-manage-title">
            <h1>Event Management Section</h1>
          </div>

          <div className="org-manage-header">
            <div className="org-actions">
              <Link to="/organizer/create-event" className="org-btn org-btn-primary">
                + New Event
              </Link>
              <button type="button" className="org-btn org-btn-outline org-btn-pill">
                Attendee Insights <ChevronDown size={14} />
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

          <section className="verify-content">
            <div className="verify-event-card">
              <div>
                <h2>{eventSummary.title}</h2>
                <p>
                  <MapPin size={16} /> {eventSummary.location}
                </p>
              </div>
              <div className="verify-status">
                <span className="status-dot" /> {eventSummary.status}
              </div>
              <div className="verify-avatar" />
            </div>

            <VerificationSearchPanel onSearch={handleSearch} onScan={handleScan} />

            <div className="verify-section">
              <h3>TICKET / ATTENDEE DETAILS</h3>
              <AttendeeVerificationCard attendee={attendee} status={status} />
            </div>

            <div className={`verify-result ${status}`}>
              <div className="verify-result-icon">
                {status === 'rejected' ? <XCircle size={20} /> : <CheckCircle2 size={20} />}
              </div>
              <div>
                <strong>{validationMessage}</strong>
                <p>{validationSubtext}</p>
              </div>
            </div>

            <div className="verify-actions">
              <button type="button" className="btn-approve" onClick={handleApprove}>
                Approve Entry
              </button>
              <button type="button" className="btn-reject" onClick={handleReject}>
                Reject Entry
              </button>
            </div>

            <EntryHistoryCard items={history} />
          </section>
        </main>
      </div>

      <nav className="verify-mobile-nav">
        <button type="button">
          <Home size={18} />
          <span>Home</span>
        </button>
        <button type="button">
          <Compass size={18} />
          <span>Discover</span>
        </button>
        <button type="button" className="active">
          <Ticket size={18} />
          <span>Ticket</span>
        </button>
        <button type="button">
          <User size={18} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
}
