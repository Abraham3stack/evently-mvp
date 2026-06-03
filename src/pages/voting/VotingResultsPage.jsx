import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import VotingStatsCard from '@/components/voting/VotingStatsCard';
import VotingLeaderboard from '@/components/voting/VotingLeaderboard';
import VoteDistribution from '@/components/voting/VoteDistribution';
import { votingEvent, votingNominees, votingInsights } from '@/constants/mockVotingData';
import './VotingResultsPage.css';

const votingGoal = 15000;

export default function VotingResultsPage() {
  const { eventId } = useParams();
  const totalVotes = useMemo(
    () => votingNominees.reduce((sum, nominee) => sum + nominee.votes, 0),
    []
  );
  const sortedNominees = useMemo(
    () => [...votingNominees].sort((a, b) => b.votes - a.votes),
    []
  );
  const leadingNominee = sortedNominees[0];
  const progress = Math.min(100, Math.round((totalVotes / votingGoal) * 100));

  return (
    <div className="voting-results">
      <div className="voting-results-container">
        <header className="voting-results-header">
          <h1>Voting Results</h1>
          <p>{votingEvent.title}</p>
          <p>Event ID: {eventId}</p>
        </header>

        <section className="voting-stats-grid">
          <VotingStatsCard label="Total Votes" value={totalVotes.toLocaleString()} />
          <VotingStatsCard label="Total Nominees" value={votingNominees.length} />
          <VotingStatsCard label="Leading Nominee" value={leadingNominee.name} helper={leadingNominee.category} />
          <VotingStatsCard label="Voting Progress" value={`${progress}%`} helper={`Goal: ${votingGoal.toLocaleString()} votes`} />
        </section>

        <section className="voting-results-grid">
          <div className="voting-results-left">
            <VotingLeaderboard nominees={sortedNominees} totalVotes={totalVotes} />
            <VoteDistribution nominees={sortedNominees} totalVotes={totalVotes} />
          </div>
          <aside className="voting-insights">
            <div className="voting-section-title">
              <h2>Insights</h2>
              <span>Latest highlights</span>
            </div>
            <div className="voting-insights-grid">
              <div className="insight-card">
                <span>Most Popular Nominee</span>
                <strong>{votingInsights.mostPopular}</strong>
              </div>
              <div className="insight-card">
                <span>Fastest Growing Nominee</span>
                <strong>{votingInsights.fastestGrowing}</strong>
              </div>
              <div className="insight-card">
                <span>Total Engagement</span>
                <strong>{votingInsights.totalEngagement}</strong>
              </div>
              <div className="insight-card">
                <span>Remaining Voting Duration</span>
                <strong>{votingInsights.remainingDuration}</strong>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
