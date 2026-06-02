import {
  LayoutGrid,
  CalendarCheck,
  Ticket,
  BadgeCheck,
  ShieldCheck,
  BarChart3,
  LifeBuoy,
  Settings,
  LogOut
} from 'lucide-react';

const mainNav = [
  { label: 'Dashboard', icon: LayoutGrid, active: true },
  { label: 'Manage Events', icon: CalendarCheck },
  { label: 'Booking & Tickets', icon: Ticket },
  { label: 'Check-in', icon: BadgeCheck },
  { label: 'Verify', icon: ShieldCheck },
  { label: 'Analytics', icon: BarChart3 }
];

const supportNav = [
  { label: 'Contact Support', icon: LifeBuoy },
  { label: 'Settings', icon: Settings },
  { label: 'Logout', icon: LogOut }
];

export default function OrganizerSidebar() {
  return (
    <aside className="org-sidebar">
      <div className="org-sidebar-section">
        <p className="org-sidebar-title">Main Navigation</p>
        <div className="org-sidebar-list">
          {mainNav.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                className={`org-sidebar-item ${item.active ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="org-sidebar-divider" />

      <div className="org-sidebar-section">
        <p className="org-sidebar-title">Support And Settings</p>
        <div className="org-sidebar-list">
          {supportNav.map(item => {
            const Icon = item.icon;
            return (
              <button key={item.label} type="button" className="org-sidebar-item">
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
