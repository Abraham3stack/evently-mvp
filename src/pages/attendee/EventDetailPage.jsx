/**
 * Event Detail Page
 * Full event information with ticket tiers and organizer details
 */

import { useParams, useNavigate } from 'react-router-dom';
import { useEventById } from '@/queries/eventQueries';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Spinner from '@/components/common/Spinner';

export default function EventDetailPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { data: event, isLoading, error } = useEventById(eventId);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center min-h-96">
          <div className="flex flex-col items-center gap-4">
            <Spinner size="lg" />
            <p className="text-gray-600">Loading event details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-700 font-semibold">Event not found</p>
          <p className="text-red-600 mt-2">{error?.message || 'This event does not exist'}</p>
          <Button variant="primary" onClick={() => navigate('/events')} className="mt-4">
            Back to Events
          </Button>
        </div>
      </div>
    );
  }

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const totalCapacity = event.ticketTiers.reduce((acc, tier) => acc + tier.quantity, 0);
  const totalSold = event.ticketTiers.reduce((acc, tier) => acc + tier.sold, 0);
  const capacityPercent = Math.round((totalSold / totalCapacity) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate('/events')}
        className="text-blue-600 hover:text-blue-700 font-semibold mb-6"
      >
        ← Back to Events
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Event Image */}
          <div className="mb-6">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Title and Badge */}
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{event.title}</h1>
              <Badge variant="info" text={event.category} />
            </div>
            {event.featured && (
              <Badge variant="success" text="Featured" />
            )}
          </div>

          {/* Date, Time, Location */}
          <div className="space-y-2 mb-6 text-gray-600">
            <p className="flex items-center gap-2 text-lg">
              📅 <span>{formattedDate} at {formattedTime}</span>
            </p>
            <p className="flex items-center gap-2 text-lg">
              📍 <span>{event.location}</span>
            </p>
            <p className="flex items-center gap-2 text-lg">
              🏢 <span>{event.venue}</span>
            </p>
          </div>

          {/* Description */}
          <Card title="About This Event" className="mb-6">
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </Card>

          {/* Organizer */}
          <Card title="Organizer" className="mb-6">
            <div className="flex items-center gap-4">
              <img
                src={event.organizer.image}
                alt={event.organizer.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">{event.organizer.name}</p>
                <p className="text-sm text-gray-600">Event Organizer</p>
              </div>
            </div>
          </Card>

          {/* Event Stats */}
          <Card title="Event Statistics" className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm">Capacity</p>
                <p className="text-2xl font-bold text-gray-900">{totalCapacity}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Tickets Sold</p>
                <p className="text-2xl font-bold text-gray-900">{totalSold}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-600 text-sm mb-2">Capacity Used</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${capacityPercent}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">{capacityPercent}% full</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar - Ticket Tiers and Attendee Info */}
        <div className="lg:col-span-1">
          {/* Attendees */}
          <Card title="Attendees" className="mb-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">{event.attendeeCount}</p>
              <p className="text-gray-600">People attending</p>
            </div>
          </Card>

          {/* Ticket Tiers */}
          <Card title="Ticket Options" className="mb-6">
            <div className="space-y-4">
              {event.ticketTiers.map(tier => {
                const spotsLeft = tier.quantity - tier.sold;
                const soldOut = spotsLeft === 0;

                return (
                  <div key={tier.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{tier.name}</h4>
                      {tier.price === 0 ? (
                        <Badge variant="success" text="FREE" />
                      ) : (
                        <span className="font-bold text-gray-900">
                          ${tier.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{tier.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">
                        {soldOut ? 'Sold Out' : `${spotsLeft} left`}
                      </span>
                      <span className="text-xs text-gray-500">
                        {tier.sold}/{tier.quantity} sold
                      </span>
                    </div>
                    {!soldOut && (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => navigate(`/checkout/${event.id}`)}
                        className="w-full"
                      >
                        Get Tickets
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Tags */}
          {event.tags && event.tags.length > 0 && (
            <Card title="Tags">
              <div className="flex flex-wrap gap-2">
                {event.tags.map(tag => (
                  <Badge key={tag} variant="default" text={tag} />
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
