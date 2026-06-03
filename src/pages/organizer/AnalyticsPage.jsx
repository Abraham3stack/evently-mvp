import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrganizerTopbar from '@/components/organizer/OrganizerTopbar';
import OrganizerSidebar from '@/components/organizer/OrganizerSidebar';
import './AnalyticsPage.css';
import './ManageEventsPage.css';
import './OrganizerDashboard.css';

const kpis = [
  { label: 'Total Revenue', value: 'N 8,500,000' },
  { label: 'Tickets Sold', value: '980' },
  { label: 'Attendance Rate', value: '65%' },
  { label: 'Conversion Rate', value: '42%' }
];

const donutData = [
  { label: 'Early Bird', value: 120, color: '#f1017c' },
  { label: 'General Admission', value: 560, color: '#7e22ce' },
  { label: 'VIP', value: 300, color: '#111827' }
];

const salesRows = [
  { tier: 'Early Bird', price: 'N 5,000', sold: '120', capacity: '150', revenue: 'N 600,000', status: 'Active' },
  { tier: 'General Admission', price: 'N 10,000', sold: '560', capacity: '700', revenue: 'N 5,600,000', status: 'Active' },
  { tier: 'VIP', price: 'N 25,000', sold: '300', capacity: '350', revenue: 'N 7,500,000', status: 'Active' }
];

function DonutChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let offset = 0;

  return (
    <svg viewBox="0 0 200 200" className="analytics-donut" role="img" aria-label="Ticket distribution">
      {data.map(item => {
        const value = (item.value / total) * 100;
        const dashArray = `${value} ${100 - value}`;
        const dashOffset = 25 - offset;
        offset += value;
        return (
          <circle
            key={item.label}
            cx="100"
            cy="100"
            r="70"
            fill="transparent"
            stroke={item.color}
            strokeWidth="18"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 100 100)"
          />
        );
      })}
      <circle cx="100" cy="100" r="46" fill="#ffffff" />
    </svg>
  );
}

export default function AnalyticsPage() {
  const { eventId } = useParams();

  useEffect(() => {
    document.body.classList.add('organizer-analytics');
    return () => document.body.classList.remove('organizer-analytics');
  }, []);

  return (
    <div className="organizer-analytics">
      <OrganizerTopbar />
      <div className="org-layout">
        <OrganizerSidebar activeItem="Analytics" />
        <main className="org-content">
          <div className="org-manage-title">
            <h1>Event Analytics</h1>
          </div>

          <section className="analytics-kpis">
            {kpis.map(kpi => (
              <div key={kpi.label} className="analytics-card">
                <span>{kpi.label}</span>
                <strong>{kpi.value}</strong>
              </div>
            ))}
          </section>

          <section className="analytics-grid">
            <div className="analytics-panel">
              <h3>Revenue Trend</h3>
              <svg viewBox="0 0 600 220" className="analytics-chart" role="img" aria-label="Revenue trend">
                <polyline
                  fill="none"
                  stroke="#f1017c"
                  strokeWidth="3"
                  points="20,160 120,140 220,110 320,120 420,80 520,60"
                />
                <line x1="20" y1="180" x2="560" y2="180" stroke="#e5e7eb" strokeWidth="2" />
              </svg>
            </div>
            <div className="analytics-panel">
              <h3>Ticket Distribution</h3>
              <DonutChart data={donutData} />
              <div className="analytics-donut-legend">
                {donutData.map(item => (
                  <span key={item.label}>
                    <span className="analytics-dot" style={{ background: item.color }} />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="analytics-panel">
            <h3>Sales by Ticket Tier</h3>
            <div className="analytics-table-wrap">
              <table className="analytics-table">
                <thead>
                  <tr>
                    <th>Ticket Tier</th>
                    <th>Price</th>
                    <th>Sold</th>
                    <th>Capacity</th>
                    <th>Revenue</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {salesRows.map(row => (
                    <tr key={row.tier}>
                      <td>{row.tier}</td>
                      <td>{row.price}</td>
                      <td>{row.sold}</td>
                      <td>{row.capacity}</td>
                      <td>{row.revenue}</td>
                      <td><span className="analytics-status">{row.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="analytics-panel">
            <h3>Insights</h3>
            <div className="analytics-insights">
              <p><strong>Best Performing Tier:</strong> General Admission</p>
              <p><strong>Peak Purchase Period:</strong> 6PM - 8PM (Friday)</p>
              <p><strong>Remaining Capacity:</strong> 240 tickets</p>
              <p><strong>Suggested Action:</strong> Boost VIP visibility with a limited offer.</p>
            </div>
          </section>

          <p style={{ fontSize: '12px', color: '#6b7280' }}>Event ID: {eventId}</p>
        </main>
      </div>
    </div>
  );
}
