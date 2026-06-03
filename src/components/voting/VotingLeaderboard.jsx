import { Crown } from 'lucide-react';

const getInitials = name => name.split(' ').map(word => word[0]).join('');

export default function VotingLeaderboard({ nominees, totalVotes }) {
  return (
    <div className="voting-leaderboard">
      <div className="voting-section-title">
        <h2>Leaderboard</h2>
        <span>Top nominees by votes</span>
      </div>
      <div className="leaderboard-list">
        {nominees.map((nominee, index) => {
          const percentage = totalVotes ? Math.round((nominee.votes / totalVotes) * 100) : 0;
          const isWinner = index === 0;
          return (
            <div key={nominee.id} className={`leaderboard-row ${isWinner ? 'winner' : ''}`}>
              <div className="leaderboard-rank">{index + 1}</div>
              <div className="leaderboard-avatar">
                {getInitials(nominee.name)}
              </div>
              <div className="leaderboard-info">
                <div className="leaderboard-name">
                  <span>{nominee.name}</span>
                  {isWinner && (
                    <span className="winner-badge">
                      <Crown size={14} /> Winner
                    </span>
                  )}
                </div>
                <div className="leaderboard-meta">
                  <span>{nominee.votes.toLocaleString()} votes</span>
                  <span>{percentage}%</span>
                </div>
                <div className="leaderboard-bar">
                  <span style={{ width: `${percentage}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
