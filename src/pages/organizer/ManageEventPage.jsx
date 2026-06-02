import { useParams } from 'react-router-dom';

export default function ManageEventPage() {
  const { eventId } = useParams();
  
  return (
    <div>
      <h1>Manage Event Page</h1>
      <p>Event ID: {eventId}</p>
    </div>
  );
}
