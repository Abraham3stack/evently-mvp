export default function VoteDistribution({ nominees, totalVotes }) {
  return (
    <div className="vote-distribution">
      <div className="voting-section-title">
        <h2>Vote Distribution</h2>
        <span>Share of total votes</span>
      </div>
      <div className="distribution-list">
        {nominees.map(nominee => {
          const percentage = totalVotes ? Math.round((nominee.votes / totalVotes) * 100) : 0;
          return (
            <div key={nominee.id} className="distribution-row">
              <div className="distribution-label">
                <span>{nominee.name}</span>
                <strong>{percentage}%</strong>
              </div>
              <div className="distribution-bar">
                <span style={{ width: `${percentage}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
