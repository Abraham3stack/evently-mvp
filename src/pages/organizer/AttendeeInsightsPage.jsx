import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  TrendingUp,
  TrendingDown,
  User,
  Users,
  MapPin,
  Activity
} from 'lucide-react';
import OrganizerTopbar from '@/components/organizer/OrganizerTopbar';
import OrganizerSidebar from '@/components/organizer/OrganizerSidebar';
import OrganizerFilters from '@/components/organizer/OrganizerFilters';
import './AttendeeInsightsPage.css';
import './ManageEventsPage.css';
import './OrganizerDashboard.css';

const mockEvents = [
  { id: '1', title: 'Tech Culture Fest' },
  { id: '2', title: 'Tech Culture Fest' }
];

const interestData = [
  { label: 'Interest-A', value: 212, color: '#f1017c' },
  { label: 'Interest-B', value: 123, color: '#4f46e5' },
  { label: 'Interest-C', value: 234, color: '#6b7280' },
  { label: 'Interest-D', value: 265, color: '#f9a8d4' },
  { label: 'Interest-E', value: 218, color: '#111827' }
];

const ageData = [
  { label: '18 - 24 Years', value: 2345, color: '#f1017c' },
  { label: '25 - 34 Years', value: 1342, color: '#6b7280' },
  { label: '35 - 44 Years', value: 245, color: '#f472b6' },
  { label: '44 + Years', value: 124, color: '#111827' }
];

const insightCards = [
  {
    title: 'ATTENDEE AGE',
    subtitle: '18 -24 Years',
    trend: '30% Increase',
    value: '2345',
    up: true,
    icon: <User size={18} />
  },
  {
    title: 'ATTENDEE GENDER',
    subtitle: 'Male',
    trend: '18% Increase',
    value: '3345',
    up: true,
    icon: <Users size={18} />
  },
  {
    title: 'ATTENDEE LOCATION',
    subtitle: 'Lagos',
    trend: '15% decrease',
    value: '845',
    up: false,
    icon: <MapPin size={18} />
  },
  {
    title: 'ATTENDEE INTERESTS',
    subtitle: 'Technology',
    trend: '63% Increase',
    value: '123',
    up: true,
    icon: <Activity size={18} />
  },
  {
    title: 'TOTAL ENGAGEMENT',
    subtitle: 'FaceBook ADS',
    trend: '21% decrease',
    value: '21',
    up: false,
    icon: <Activity size={18} />
  }
];

function DonutChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let offset = 0;

  return (
    <svg viewBox="0 0 200 200" className="insights-donut" role="img" aria-label="Attendee interests">
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

function PieChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulative = 0;

  return (
    <svg viewBox="0 0 200 200" className="insights-pie" role="img" aria-label="Attendee ages">
      {data.map(item => {
        const start = (cumulative / total) * 2 * Math.PI;
        cumulative += item.value;
        const end = (cumulative / total) * 2 * Math.PI;
        const largeArc = end - start > Math.PI ? 1 : 0;
        const startX = 100 + 70 * Math.cos(start - Math.PI / 2);
        const startY = 100 + 70 * Math.sin(start - Math.PI / 2);
        const endX = 100 + 70 * Math.cos(end - Math.PI / 2);
        const endY = 100 + 70 * Math.sin(end - Math.PI / 2);
        const d = `M 100 100 L ${startX} ${startY} A 70 70 0 ${largeArc} 1 ${endX} ${endY} Z`;
        return <path key={item.label} d={d} fill={item.color} />;
      })}
    </svg>
  );
}

export default function AttendeeInsightsPage() {
  const { eventId } = useParams();
  const event = mockEvents.find(item => item.id === eventId);
  const interestTotal = interestData.reduce((sum, item) => sum + item.value, 0);
  const ageTotal = ageData.reduce((sum, item) => sum + item.value, 0);

  useEffect(() => {
    document.body.classList.add('organizer-insights');
    return () => document.body.classList.remove('organizer-insights');
  }, []);

  if (!event) {
    return (
      <div className="organizer-insights">
        <OrganizerTopbar />
        <div className="org-layout">
          <OrganizerSidebar activeItem="Manage Events" />
          <main className="org-content">
            <div className="org-not-found">
              <h2>Event not found</h2>
              <p>We could not locate that event. Please return to the events list.</p>
              <Link to="/organizer/events">Back to Manage Events</Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="organizer-insights">
      <OrganizerTopbar />
      <div className="org-layout">
        <OrganizerSidebar activeItem="Manage Events" />
        <main className="org-content">
          <div className="org-details-header">
            <h1>Event Management Section</h1>
          </div>

          <OrganizerFilters insightsLink={`/organizer/events/${eventId}/insights`} />

          <section className="insights-layout">
            <div className="insights-charts">
              <div className="insight-card">
                <h2>ATTENDEE INTERESTS</h2>
                <div className="insight-chart">
                  <DonutChart data={interestData} />
                  <div className="insight-values">
                    {interestData.map(item => (
                      <div key={item.label}>
                        <strong>{item.value}</strong>
                        <span>{((item.value / interestTotal) * 100).toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="insight-legend">
                  {interestData.map(item => (
                    <div key={item.label}>
                      <span className="legend-dot" style={{ background: item.color }} />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="insight-card">
                <h2>ATTENDEE AGES</h2>
                <div className="insight-chart">
                  <PieChart data={ageData} />
                  <div className="insight-values">
                    {ageData.map(item => (
                      <div key={item.label}>
                        <strong>{item.value}</strong>
                        <span>{((item.value / ageTotal) * 100).toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="insight-legend">
                  {ageData.map(item => (
                    <div key={item.label}>
                      <span className="legend-dot" style={{ background: item.color }} />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="insights-side">
              {insightCards.map(card => (
                <div key={card.title} className="insights-metric">
                  <div className="metric-header">
                    <span>{card.title}</span>
                    <div className="metric-icon">{card.icon}</div>
                  </div>
                  <div className="metric-body">
                    <div>
                      <h3>{card.subtitle}</h3>
                      <p className={card.up ? 'trend up' : 'trend down'}>
                        {card.up ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        {card.trend}
                      </p>
                    </div>
                    <strong>{card.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
