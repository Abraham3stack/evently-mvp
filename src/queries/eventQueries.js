/**
 * Event Query Hooks
 * TanStack Query hooks for event data fetching
 */

import { useQuery } from '@tanstack/react-query';
import { eventService } from '@/services/eventService';

/**
 * Fetch all events with optional filters
 */
export const useEvents = (filters = {}) => {
  return useQuery({
    queryKey: ['events', filters],
    queryFn: () => eventService.getEvents(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2
  });
};

/**
 * Fetch featured events
 */
export const useFeaturedEvents = () => {
  return useQuery({
    queryKey: ['events', 'featured'],
    queryFn: () => eventService.getFeaturedEvents(),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2
  });
};

/**
 * Fetch single event by ID
 */
export const useEventById = (eventId) => {
  return useQuery({
    queryKey: ['event', eventId],
    queryFn: () => eventService.getEventById(eventId),
    enabled: !!eventId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2
  });
};

/**
 * Search events by query string
 */
export const useSearchEvents = (query) => {
  return useQuery({
    queryKey: ['events', 'search', query],
    queryFn: () => eventService.searchEvents(query),
    enabled: !!query,
    staleTime: 3 * 60 * 1000, // 3 minutes
    retry: 2
  });
};

/**
 * Get events by category
 */
export const useEventsByCategory = (category) => {
  return useQuery({
    queryKey: ['events', 'category', category],
    queryFn: () => eventService.getEventsByCategory(category),
    enabled: !!category,
    staleTime: 5 * 60 * 1000,
    retry: 2
  });
};

/**
 * Get events by location
 */
export const useEventsByLocation = (location) => {
  return useQuery({
    queryKey: ['events', 'location', location],
    queryFn: () => eventService.getEventsByLocation(location),
    enabled: !!location,
    staleTime: 5 * 60 * 1000,
    retry: 2
  });
};
