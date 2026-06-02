import { useParams } from 'react-router-dom';

export default function AttendeeListPage() {
  const { eventId } = useParams();
  
  return (
    <div>
      <h1>Attendee List Page</h1>
      <p>Event ID: {eventId}</p>
    </div>
  );
}
