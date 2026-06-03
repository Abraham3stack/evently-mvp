import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TicketPlaceholderPage.css';

export default function TicketPlaceholderPage() {
  const { eventId } = useParams();

  useEffect(() => {
    document.body.classList.add('ticket-placeholder-body');
    return () => document.body.classList.remove('ticket-placeholder-body');
  }, []);

  return (
    <div className="ticket-placeholder">
      <h1>QR Ticket Page Coming Next</h1>
      <p>Event ID: {eventId}</p>
    </div>
  );
}
