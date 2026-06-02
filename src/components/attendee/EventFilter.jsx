/**
 * EventFilter Component
 * Filter events by search, category, location, and date
 */

import { useState } from 'react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const CATEGORIES = [
  'Technology',
  'Music',
  'Church',
  'Career',
  'Fashion',
  'Community',
  'Sports',
  'Education'
];

const LOCATIONS = [
  'San Francisco, CA',
  'Austin, TX',
  'Denver, CO',
  'New York, NY',
  'Boston, MA',
  'Los Angeles, CA',
  'Seattle, WA',
  'Chicago, IL'
];

export default function EventFilter({ onFilter, onClear }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleApplyFilters = () => {
    onFilter({
      search,
      category,
      location,
      startDate,
      endDate
    });
  };

  const handleClearFilters = () => {
    setSearch('');
    setCategory('');
    setLocation('');
    setStartDate('');
    setEndDate('');
    onClear();
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {/* Search */}
        <Input
          label="Search"
          type="text"
          placeholder="Event name, keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Locations</option>
            {LOCATIONS.map(loc => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Start Date */}
        <Input
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        {/* End Date */}
        <Input
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Button
          variant="primary"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </Button>
        <Button
          variant="secondary"
          onClick={handleClearFilters}
        >
          Clear All
        </Button>
      </div>
    </div>
  );
}
