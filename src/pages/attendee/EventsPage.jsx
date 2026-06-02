/**
 * Events Page
 * Browse and search all events
 */

import { useState } from 'react';
import { useEvents } from '@/queries/eventQueries';
import EventCard from '@/components/attendee/EventCard';
import EventFilter from '@/components/attendee/EventFilter';
import Spinner from '@/components/common/Spinner';

export default function EventsPage() {
  const [filters, setFilters] = useState({});

  const { data: events = [], isLoading, error } = useEvents(filters);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClear = () => {
    setFilters({});
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center min-h-96">
          <div className="flex flex-col items-center gap-4">
            <Spinner size="lg" />
            <p className="text-gray-600">Loading events...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-700 font-semibold">Error loading events</p>
          <p className="text-red-600 mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Discover Events</h1>
        <p className="text-gray-600">Browse upcoming events and find one you love</p>
      </div>

      {/* Filter */}
      <EventFilter onFilter={handleFilter} onClear={handleClear} />

      {/* Events Grid */}
      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
          <p className="text-gray-600 text-lg">No events found matching your criteria</p>
          <p className="text-gray-500 mt-2">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
