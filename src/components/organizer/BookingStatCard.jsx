export default function BookingStatCard({ icon, label, value }) {
  return (
    <div className="booking-stat-card">
      <div className="booking-stat-icon">{icon}</div>
      <div>
        <p className="booking-stat-label">{label}</p>
        <h3 className="booking-stat-value">{value}</h3>
      </div>
    </div>
  );
}
