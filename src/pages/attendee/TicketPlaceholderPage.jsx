import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TicketPlaceholderPage.css';

const placeholderImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="960" height="960"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="%23f472b6"/><stop offset="100%" stop-color="%237e22ce"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g)"/><circle cx="70%" cy="35%" r="200" fill="%23ffffff" opacity="0.2"/><circle cx="25%" cy="75%" r="260" fill="%23ffffff" opacity="0.16"/></svg>';

const mockEvents = [
  { id: '1', title: 'Lagos Light Concert', image: placeholderImage },
  { id: '2', title: 'Design Systems for Emerging Markets', image: placeholderImage },
  { id: '3', title: 'AI for Product Leaders', image: placeholderImage }
];

const ticketData = {
  type: 'VIP',
  dateTime: 'Dec 14, 7:00pm',
  venue: 'Eko Convention',
  ticketId: '#ECLLC-1257-700',
  status: 'Active'
};

export default function TicketPlaceholderPage() {
  const { eventId } = useParams();
  const event = useMemo(
    () => mockEvents.find(item => item.id === eventId) || mockEvents[0],
    [eventId]
  );
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    document.body.classList.add('ticket-qr-body');
    return () => document.body.classList.remove('ticket-qr-body');
  }, []);

  const handleCalendar = () => {
    setFeedback('Event added to calendar');
    setTimeout(() => setFeedback(''), 2000);
  };

  return (
    <div className="ticket-qr-page">
      <div className="ticket-qr-grid">
        <aside className="ticket-qr-media">
          <img src={event.image || placeholderImage} alt={event.title} />
        </aside>
        <main className="ticket-qr-content">
          <div className="ticket-qr-card">
            <div className="ticket-qr-top">
              <div>
                <h1>{event.title}</h1>
                <span className="ticket-badge">{ticketData.type}</span>
              </div>
            </div>

            <div className="ticket-qr-info">
              <div>
                <span>Date & Time</span>
                <strong>{ticketData.dateTime}</strong>
              </div>
              <div>
                <span>Venue</span>
                <strong>{ticketData.venue}</strong>
              </div>
              <div>
                <span>Ticket ID</span>
                <strong>{ticketData.ticketId}</strong>
              </div>
              <div>
                <span>Status</span>
                <strong className="ticket-status">{ticketData.status}</strong>
              </div>
            </div>

            <div className="ticket-divider">
              <span className="ticket-cutout left" />
              <span className="ticket-cutout right" />
            </div>

            <div className="ticket-qr-section">
              <p>Scan for confirmation</p>
              <div className="ticket-qr-frame">
                <div className="qr-corner top-left" />
                <div className="qr-corner top-right" />
                <div className="qr-corner bottom-left" />
                <div className="qr-corner bottom-right" />
                <div className="qr-code" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="ticket-qr-footer">
            <button type="button" className="ticket-qr-cta" onClick={handleCalendar}>
              Add to Calendar
            </button>
            {feedback && <span className="ticket-qr-feedback">{feedback}</span>}
          </div>
        </main>
      </div>
    </div>
  );
}
