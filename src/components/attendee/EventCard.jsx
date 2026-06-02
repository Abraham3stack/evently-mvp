/**
 * EventCard Component
 * Reusable event preview card for listing
 */

import { Link } from 'react-router-dom';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';

export default function EventCard({ event, onClick }) {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const spotsLeft = event.ticketTiers.reduce((acc, tier) => {
    return acc + (tier.quantity - tier.sold);
  }, 0);

  return (
    <Link to={`/events/${event.id}`}>
      <Card onClick={onClick} className="h-full flex flex-col hover:shadow-xl transition-shadow">
        {/* Image */}
        <div className="relative mb-4">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover rounded-md"
          />
          {event.featured && (
            <div className="absolute top-3 right-3">
              <Badge variant="success" text="Featured" />
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="mb-3">
          <Badge variant="info" text={event.category} />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2">
          {event.title}
        </h3>

        {/* Date and Time */}
        <p className="text-sm text-gray-600 mb-2">
          📅 {formattedDate} at {formattedTime}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-600 mb-3">
          📍 {event.location}
        </p>

        {/* Organizer */}
        <div className="flex items-center gap-2 mb-3">
          <img
            src={event.organizer.image}
            alt={event.organizer.name}
            className="w-6 h-6 rounded-full"
          />
          <p className="text-sm text-gray-600">{event.organizer.name}</p>
        </div>

        {/* Attendees */}
        <p className="text-sm text-gray-600 mb-3">
          👥 {event.attendeeCount} attending
        </p>

        {/* Price Range */}
        <div className="mb-3">
          {event.priceRange.min === 0 && event.priceRange.max === 0 ? (
            <p className="font-semibold text-green-600">FREE</p>
          ) : (
            <p className="font-semibold text-gray-900">
              ${event.priceRange.min.toFixed(2)} - ${event.priceRange.max.toFixed(2)}
            </p>
          )}
        </div>

        {/* Spots Available */}
        <div className="mt-auto pt-3 border-t border-gray-200">
          {spotsLeft > 0 ? (
            <p className="text-sm text-gray-600">
              {spotsLeft} tickets available
            </p>
          ) : (
            <p className="text-sm text-red-600 font-semibold">Sold Out</p>
          )}
        </div>
      </Card>
    </Link>
  );
}
