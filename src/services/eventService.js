/**
 * Event Service
 * Mock service for event operations with filtering and search
 */

import { mockEvents, delay } from '@/utils/mockData';

export const eventService = {
  /**
   * Get all events with optional filters
   */
  getEvents: async (filters = {}) => {
    await delay(500);
    
    let events = [...mockEvents];

    // Filter by category
    if (filters.category) {
      events = events.filter(e => e.category === filters.category);
    }

    // Filter by location
    if (filters.location) {
      events = events.filter(e => 
        e.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by date range
    if (filters.startDate && filters.endDate) {
      events = events.filter(e => {
        const eventDate = new Date(e.date);
        return eventDate >= new Date(filters.startDate) && 
               eventDate <= new Date(filters.endDate);
      });
    }

    // Filter by price range
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      events = events.filter(e => {
        const min = filters.minPrice ?? 0;
        const max = filters.maxPrice ?? Infinity;
        return e.priceRange.min >= min && e.priceRange.min <= max;
      });
    }

    // Sort by date ascending
    events.sort((a, b) => new Date(a.date) - new Date(b.date));

    return events;
  },

  /**
   * Get featured events only
   */
  getFeaturedEvents: async () => {
    await delay(400);
    return mockEvents.filter(e => e.featured).slice(0, 6);
  },

  /**
   * Get single event by ID
   */
  getEventById: async (id) => {
    await delay(300);
    const event = mockEvents.find(e => e.id === id);
    if (!event) {
      throw new Error(`Event with ID ${id} not found`);
    }
    return event;
  },

  /**
   * Search events by query
   */
  searchEvents: async (query) => {
    await delay(400);
    
    if (!query.trim()) {
      return mockEvents;
    }

    const lowerQuery = query.toLowerCase();
    return mockEvents.filter(e =>
      e.title.toLowerCase().includes(lowerQuery) ||
      e.description.toLowerCase().includes(lowerQuery) ||
      e.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      e.location.toLowerCase().includes(lowerQuery) ||
      e.category.toLowerCase().includes(lowerQuery)
    );
  },

  /**
   * Filter events (alias for getEvents with filters)
   */
  filterEvents: async (filters) => {
    return eventService.getEvents(filters);
  },

  /**
   * Get events by category
   */
  getEventsByCategory: async (category) => {
    await delay(350);
    return mockEvents.filter(e => e.category === category);
  },

  /**
   * Get events by location
   */
  getEventsByLocation: async (location) => {
    await delay(350);
    return mockEvents.filter(e =>
      e.location.toLowerCase().includes(location.toLowerCase())
    );
  },

  // Organizer methods (stub for future implementation)
  createEvent: async (eventData) => {
    await delay(1000);
    return null;
  },

  updateEvent: async (id, eventData) => {
    await delay(1000);
    return null;
  },

  deleteEvent: async (id) => {
    await delay(500);
    return null;
  }
};
