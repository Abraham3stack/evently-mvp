const points = [
  { label: '35,000', percent: '17.3%', y: 48 },
  { label: '22,000', percent: '10.9%', y: 70 },
  { label: '46,000', percent: '22.7%', y: 30 },
  { label: '15,000', percent: '7.4%', y: 86 },
  { label: '28,000', percent: '13.8%', y: 60 },
  { label: '34,000', percent: '16.8%', y: 46 },
  { label: '22,500', percent: '11.1%', y: 68 }
];

const path = points
  .map((point, index) => {
    const x = 40 + index * 80;
    const y = 200 - point.y;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  })
  .join(' ');

export default function SalesChart() {
  return (
    <div className="sales-chart">
      <svg viewBox="0 0 560 240" role="img" aria-label="Net sales chart">
        <g className="chart-grid">
          <line x1="20" y1="40" x2="540" y2="40" />
          <line x1="20" y1="90" x2="540" y2="90" />
          <line x1="20" y1="140" x2="540" y2="140" />
          <line x1="20" y1="190" x2="540" y2="190" />
        </g>
        <path d={path} className="chart-line" />
        {points.map((point, index) => {
          const x = 40 + index * 80;
          const y = 200 - point.y;
          return (
            <g key={point.label}>
              <circle cx={x} cy={y} r="5" className="chart-dot" />
              <text x={x} y={y - 16} textAnchor="middle" className="chart-label">
                {point.label}
              </text>
              <text x={x} y={y - 2} textAnchor="middle" className="chart-percent">
                {point.percent}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
