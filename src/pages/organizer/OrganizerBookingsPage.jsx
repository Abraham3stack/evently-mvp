import { useEffect } from 'react';
import {
  Search,
  ChevronDown,
  Download,
  Plus,
  Ticket,
  ShoppingBag,
  CheckCircle2,
  Wallet
} from 'lucide-react';
import OrganizerTopbar from '@/components/organizer/OrganizerTopbar';
import OrganizerSidebar from '@/components/organizer/OrganizerSidebar';
import BookingStatCard from '@/components/organizer/BookingStatCard';
import TicketTierCard from '@/components/organizer/TicketTierCard';
import BookingsTable from '@/components/organizer/BookingsTable';
import './OrganizerBookingsPage.css';
import './OrganizerDashboard.css';

const stats = [
  {
    label: 'Total Bookings',
    value: '1,240',
    icon: <ShoppingBag size={20} />
  },
  {
    label: 'Tickets Sold',
    value: '980',
    icon: <Ticket size={20} />
  },
  {
    label: 'Checked In',
    value: '642',
    icon: <CheckCircle2 size={20} />
  },
  {
    label: 'Revenue',
    value: '₦8,500,000',
    icon: <Wallet size={20} />
  }
];

const tiers = [
  {
    name: 'Early Bird',
    price: '₦5,000',
    sold: 120,
    capacity: 150,
    status: 'Active'
  },
  {
    name: 'General Admission',
    price: '₦10,000',
    sold: 560,
    capacity: 700,
    status: 'Selling Fast'
  },
  {
    name: 'VIP',
    price: '₦25,000',
    sold: 300,
    capacity: 350,
    status: 'Active'
  }
];

const bookings = [
  {
    buyer: 'Ifeoma Okafor',
    email: 'ifeoma.okafor@gmail.com',
    ticketType: 'VIP',
    quantity: 2,
    amount: '₦50,000',
    paymentStatus: 'Paid',
    checkInStatus: 'Checked In',
    ticketId: 'EVT-1093'
  },
  {
    buyer: 'Daniel Peters',
    email: 'daniel.peters@gmail.com',
    ticketType: 'General Admission',
    quantity: 3,
    amount: '₦30,000',
    paymentStatus: 'Paid',
    checkInStatus: 'Not Checked In',
    ticketId: 'EVT-1094'
  },
  {
    buyer: 'Abigail Nwosu',
    email: 'abigail.nwosu@gmail.com',
    ticketType: 'Early Bird',
    quantity: 1,
    amount: '₦5,000',
    paymentStatus: 'Pending',
    checkInStatus: 'Not Checked In',
    ticketId: 'EVT-1095'
  },
  {
    buyer: 'Michael Obi',
    email: 'michael.obi@gmail.com',
    ticketType: 'General Admission',
    quantity: 4,
    amount: '₦40,000',
    paymentStatus: 'Paid',
    checkInStatus: 'Checked In',
    ticketId: 'EVT-1096'
  },
  {
    buyer: 'Tosin Adebayo',
    email: 'tosin.adebayo@gmail.com',
    ticketType: 'VIP',
    quantity: 1,
    amount: '₦25,000',
    paymentStatus: 'Pending',
    checkInStatus: 'Not Checked In',
    ticketId: 'EVT-1097'
  }
];

export default function OrganizerBookingsPage() {
  useEffect(() => {
    document.body.classList.add('organizer-bookings');
    return () => document.body.classList.remove('organizer-bookings');
  }, []);

  return (
    <div className="organizer-bookings">
      <OrganizerTopbar />
      <div className="org-layout">
        <OrganizerSidebar activeItem="Booking & Tickets" />
        <main className="org-content">
          <div className="bookings-header">
            <h1>Bookings & Tickets</h1>
          </div>

          <section className="bookings-controls">
            <div className="bookings-search">
              <Search size={16} />
              <input type="text" placeholder="Search booking, ticket ID, or buyer..." />
            </div>
            <div className="bookings-filters">
              <button type="button" className="org-btn org-btn-outline org-btn-pill">
                All Status <ChevronDown size={14} />
              </button>
              <button type="button" className="org-btn org-btn-outline org-btn-pill">
                All Tickets <ChevronDown size={14} />
              </button>
            </div>
            <div className="bookings-actions">
              <button type="button" className="org-btn org-btn-outline org-btn-pill">
                <Download size={14} /> Export
              </button>
              <button type="button" className="org-btn org-btn-primary org-btn-pill">
                <Plus size={14} /> Create Ticket Tier
              </button>
            </div>
          </section>

          <section className="bookings-stats">
            {stats.map(stat => (
              <BookingStatCard key={stat.label} {...stat} />
            ))}
          </section>

          <section className="bookings-tiers">
            <div className="bookings-section-title">
              <h2>Ticket Tiers</h2>
              <span>Capacity overview</span>
            </div>
            <div className="bookings-tier-grid">
              {tiers.map(tier => (
                <TicketTierCard key={tier.name} {...tier} />
              ))}
            </div>
          </section>

          <section className="bookings-table-section">
            <div className="bookings-section-title">
              <h2>Recent Bookings</h2>
              <span>Latest ticket activity</span>
            </div>
            <BookingsTable bookings={bookings} />
          </section>
        </main>
      </div>
    </div>
  );
}
