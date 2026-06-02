import { useParams } from 'react-router-dom';

export default function ValidateTicketPage() {
  const { eventId } = useParams();
  
  return (
    <div>
      <h1>Validate Ticket Page</h1>
      <p>Event ID: {eventId}</p>
    </div>
  );
}
