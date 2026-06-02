import { useEffect } from 'react';
import { Bell, CalendarCheck2, Ticket, Banknote } from 'lucide-react';
import OrganizerTopbar from '@/components/organizer/OrganizerTopbar';
import OrganizerSidebar from '@/components/organizer/OrganizerSidebar';
import StatCard from '@/components/organizer/StatCard';
import SalesChart from '@/components/organizer/SalesChart';
import CustomerActivityChart from '@/components/organizer/CustomerActivityChart';
import './OrganizerDashboard.css';

export default function OrganizerDashboard() {
  useEffect(() => {
    document.body.classList.add('organizer-dashboard');
    return () => document.body.classList.remove('organizer-dashboard');
  }, []);

  return (
    <div className="organizer-dashboard">
      <OrganizerTopbar />
      <div className="org-layout">
        <OrganizerSidebar activeItem="Dashboard" />
        <main className="org-content">
          <section className="org-greeting">
            <div className="greeting-left">
              <div className="avatar" />
              <div className="greeting-text">
                <h2>Hey User!</h2>
                <span>Organizer</span>
              </div>
            </div>
            <div className="bell">
              <Bell size={18} />
            </div>
          </section>

          <section className="stat-grid">
            <StatCard icon={<CalendarCheck2 size={20} />} label="Total Events" value="12 Active" />
            <StatCard icon={<Ticket size={20} />} label="Ticket sold" value="100" />
            <StatCard icon={<Banknote size={20} />} label="Revenue" value="₦8,500,000" />
          </section>

          <section className="analytics-grid">
            <div className="net-sales">
              <div className="net-sales-header">
                <div className="net-sales-title">
                  Net Sales
                  <span className="dropdown">⌄</span>
                </div>
                <div className="filter-pill">
                  <span>Filter:</span>
                  Monthly
                </div>
              </div>

              <div className="net-sales-summary">
                <div>
                  <span>Total Revenue</span>
                  <strong>₦8,500,000</strong>
                </div>
                <div>
                  <span>Total Tickets</span>
                  <strong>30</strong>
                </div>
                <div>
                  <span>Total Events</span>
                  <strong>9</strong>
                </div>
              </div>

              <SalesChart />
            </div>

            <CustomerActivityChart />
          </section>
        </main>
      </div>
    </div>
  );
}
