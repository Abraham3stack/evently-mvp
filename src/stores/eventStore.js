/**
 * Event Store - Zustand
 * Manages event catalog state
 */

import { create } from 'zustand';

export const useEventStore = create((set) => ({
  events: [],
  selectedEvent: null,
  loading: false,
  error: null,

  setEvents: (events) => set({ events }),
  setSelectedEvent: (event) => set({ selectedEvent: event }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null })
}));
