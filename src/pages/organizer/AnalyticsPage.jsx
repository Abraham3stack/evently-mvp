import { useParams } from 'react-router-dom';

export default function AnalyticsPage() {
  const { eventId } = useParams();
  
  return (
    <div>
      <h1>Analytics Page</h1>
      <p>Event ID: {eventId}</p>
    </div>
  );
}
