import { useParams } from 'react-router-dom';

export default function VotingResultsPage() {
  const { eventId } = useParams();
  
  return (
    <div>
      <h1>Voting Results Page</h1>
      <p>Event ID: {eventId}</p>
    </div>
  );
}
