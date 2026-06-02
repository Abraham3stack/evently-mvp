/**
 * Organizer Store - Zustand
 * Manages organizer-specific state
 */

import { create } from 'zustand';

export const useOrganizerStore = create((set) => ({
  organizerEvents: [],
  selectedEventForManagement: null,
  loading: false,
  error: null,

  setOrganizerEvents: (events) => set({ organizerEvents: events }),
  setSelectedEventForManagement: (event) => set({ selectedEventForManagement: event }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null })
}));
