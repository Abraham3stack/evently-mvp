export default function VotingStatsCard({ label, value, helper }) {
  return (
    <div className="voting-stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      {helper && <p>{helper}</p>}
    </div>
  );
}
