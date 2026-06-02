import { useParams } from 'react-router-dom';

export default function VotingPage() {
  const { eventId } = useParams();
  
  return (
    <div>
      <h1>Voting Page</h1>
      <p>Event ID: {eventId}</p>
    </div>
  );
}
