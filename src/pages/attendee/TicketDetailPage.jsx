import { useParams } from 'react-router-dom';

export default function TicketDetailPage() {
  const { ticketId } = useParams();
  
  return (
    <div>
      <h1>Ticket Detail Page</h1>
      <p>Ticket ID: {ticketId}</p>
    </div>
  );
}
