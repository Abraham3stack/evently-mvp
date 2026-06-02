export default function TicketTierCard({ name, price, sold, capacity, status }) {
  const percent = Math.min(100, Math.round((sold / capacity) * 100));

  return (
    <div className="ticket-tier-card">
      <div className="ticket-tier-header">
        <div>
          <h3>{name}</h3>
          <p className="ticket-tier-price">{price}</p>
        </div>
        <span className={`ticket-tier-badge ${status.toLowerCase().replace(/\s+/g, '-')}`}>
          {status}
        </span>
      </div>
      <div className="ticket-tier-meta">
        <span>{sold} sold</span>
        <span>{capacity} capacity</span>
      </div>
      <div className="ticket-tier-progress">
        <div className="ticket-tier-bar" style={{ width: `${percent}%` }} />
      </div>
      <p className="ticket-tier-foot">{sold} sold / {capacity} capacity</p>
    </div>
  );
}
