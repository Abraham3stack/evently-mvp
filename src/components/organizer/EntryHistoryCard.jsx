export default function EntryHistoryCard({ items }) {
  return (
    <div className="verify-history">
      <div className="verify-history-header">
        <h4>ENTRY HISTORY</h4>
        <button type="button" className="verify-history-link">View All</button>
      </div>
      <div className="verify-history-list">
        {items.map((item, index) => (
          <div key={`${item.time}-${index}`} className="verify-history-item">
            {item.time} - {item.note}
          </div>
        ))}
      </div>
    </div>
  );
}
