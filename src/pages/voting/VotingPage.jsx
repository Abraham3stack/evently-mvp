import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NomineeCard from '@/components/voting/NomineeCard';
import { votingEvent, votingNominees } from '@/constants/mockVotingData';
import './VotingPage.css';

export default function VotingPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [selectedNomineeId, setSelectedNomineeId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedNominee = useMemo(
    () => votingNominees.find(nominee => nominee.id === selectedNomineeId),
    [selectedNomineeId]
  );

  const handleSubmit = () => {
    if (!selectedNomineeId || isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    setIsSuccess(false);

    // Simulate vote submission latency.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => navigate(`/voting/${eventId}/results`), 900);
    }, 1200);
  };

  return (
    <div className="voting-page">
      <div className="voting-container">
        <header className="voting-header">
          <h1>Vote For Your Favorite Nominee</h1>
          <p>{votingEvent.title}</p>
          <p>{votingEvent.subtitle}</p>
          <div className="voting-meta">
            <span>Total Votes Cast: {votingEvent.totalVotes.toLocaleString()}</span>
            <span>Voting Closes: {votingEvent.closesOn}</span>
            <span>Event ID: {eventId}</span>
            <span>Nominees: {votingNominees.length}</span>
          </div>
        </header>

        <section className="voting-nominees">
          {votingNominees.map(nominee => (
            <NomineeCard
              key={nominee.id}
              nominee={nominee}
              isSelected={selectedNomineeId === nominee.id}
              onSelect={setSelectedNomineeId}
            />
          ))}
        </section>

        <section className="voting-summary">
          <h2>Voting Summary</h2>
          <div className="voting-summary-grid">
            <div>
              <span>Selected Nominee</span>
              <p>{selectedNominee ? selectedNominee.name : 'None selected'}</p>
            </div>
            <div>
              <span>Event Name</span>
              <p>{votingEvent.title}</p>
            </div>
            <div>
              <span>Current Vote Count</span>
              <p>{selectedNominee ? selectedNominee.votes.toLocaleString() : '--'}</p>
            </div>
          </div>
          <div className="voting-submit">
            <button type="button" onClick={handleSubmit} disabled={!selectedNomineeId || isSubmitting}>
              {isSubmitting ? 'Submitting Vote...' : 'Submit Vote'}
            </button>
            {isSuccess && <span className="voting-feedback">Vote submitted successfully!</span>}
          </div>
        </section>
      </div>
    </div>
  );
}
