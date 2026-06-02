/**
 * Auth Store - Zustand
 * Manages guest session state
 */

import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  guestSession: null,
  isAuthenticated: false,

  setGuestSession: (email, name) => set({
    guestSession: { email, name },
    isAuthenticated: true
  }),

  clearGuestSession: () => set({
    guestSession: null,
    isAuthenticated: false
  })
}));
