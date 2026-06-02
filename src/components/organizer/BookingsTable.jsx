import { MoreHorizontal } from 'lucide-react';

const paymentClasses = {
  Paid: 'status-badge paid',
  Pending: 'status-badge pending'
};

const checkinClasses = {
  'Checked In': 'status-badge checked',
  'Not Checked In': 'status-badge not-checked'
};

export default function BookingsTable({ bookings }) {
  return (
    <div className="bookings-table-wrap">
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Buyer</th>
            <th>Email</th>
            <th>Ticket Type</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Payment Status</th>
            <th>Check-in Status</th>
            <th>Ticket ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.ticketId}>
              <td>{booking.buyer}</td>
              <td>{booking.email}</td>
              <td>{booking.ticketType}</td>
              <td>{booking.quantity}</td>
              <td>{booking.amount}</td>
              <td>
                <span className={paymentClasses[booking.paymentStatus] || 'status-badge'}>
                  {booking.paymentStatus}
                </span>
              </td>
              <td>
                <span className={checkinClasses[booking.checkInStatus] || 'status-badge'}>
                  {booking.checkInStatus}
                </span>
              </td>
              <td>{booking.ticketId}</td>
              <td className="table-actions">
                <button type="button" className="table-view">View</button>
                <button type="button" className="table-more" aria-label="More options">
                  <MoreHorizontal size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
