import { Mail, Phone, Ticket, BadgeCheck, XCircle } from 'lucide-react';

export default function AttendeeVerificationCard({ attendee, status }) {
  const isRejected = status === 'rejected';
  const isCheckedIn = status === 'checked_in';

  return (
    <div className="verify-attendee-card">
      <div className="verify-attendee-header">
        <div className="verify-avatar" />
        <div>
          <h3>{attendee.name}</h3>
          <span className={`verify-badge ${isRejected ? 'invalid' : 'valid'}`}>
            {isRejected ? 'REJECTED' : 'VALID TICKET'}
          </span>
          <p>
            <Mail size={14} /> {attendee.email}
          </p>
          <p>
            <Phone size={14} /> {attendee.phone}
          </p>
        </div>
      </div>

      <div className="verify-attendee-meta">
        <span>
          <Ticket size={16} /> {attendee.ticketType}
        </span>
        <span>
          {isCheckedIn ? <BadgeCheck size={16} /> : <XCircle size={16} />}
          {isCheckedIn ? 'Checked in' : 'Not checked in'}
        </span>
      </div>
      <div className="verify-attendee-id">{attendee.ticketId}</div>
    </div>
  );
}
