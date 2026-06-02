const slices = [
  { label: 'Event-A', value: 250, color: '#f43f5e' },
  { label: 'Event-B', value: 450, color: '#7c3aed' },
  { label: 'Event-C', value: 370, color: '#6b7280' },
  { label: 'Event-D', value: 290, color: '#111827' },
  { label: 'Event-E', value: 170, color: '#1f2937' }
];

export default function CustomerActivityChart() {
  const total = slices.reduce((sum, slice) => sum + slice.value, 0);
  let cumulative = 0;

  return (
    <div className="activity-card">
      <h3>Customer Activities</h3>
      <div className="activity-body">
        <svg viewBox="0 0 200 200" className="donut" role="img" aria-label="Customer activity breakdown">
          {slices.map(slice => {
            const start = (cumulative / total) * 2 * Math.PI;
            cumulative += slice.value;
            const end = (cumulative / total) * 2 * Math.PI;

            const largeArc = end - start > Math.PI ? 1 : 0;
            const startX = 100 + 70 * Math.cos(start - Math.PI / 2);
            const startY = 100 + 70 * Math.sin(start - Math.PI / 2);
            const endX = 100 + 70 * Math.cos(end - Math.PI / 2);
            const endY = 100 + 70 * Math.sin(end - Math.PI / 2);

            const path = `M ${startX} ${startY} A 70 70 0 ${largeArc} 1 ${endX} ${endY}`;

            return (
              <path key={slice.label} d={path} stroke={slice.color} strokeWidth="18" fill="none" />
            );
          })}
          <circle cx="100" cy="100" r="45" fill="#ffffff" />
        </svg>
        <div className="activity-labels">
          {slices.map(slice => (
            <div key={slice.label} className="activity-item">
              <span className="activity-value">{slice.value}</span>
              <span className="activity-percent">
                {((slice.value / total) * 100).toFixed(1)}%
              </span>
              <div className="activity-legend">
                <span className="dot" style={{ background: slice.color }} />
                <span>{slice.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
