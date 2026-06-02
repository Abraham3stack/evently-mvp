/**
 * UI Store - Zustand
 * Manages global UI state
 */

import { create } from 'zustand';

export const useUiStore = create((set) => ({
  toasts: [],
  modals: {},

  addToast: (toast) => set((state) => ({
    toasts: [...state.toasts, { ...toast, id: Date.now() }]
  })),

  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter(t => t.id !== id)
  })),

  openModal: (name) => set((state) => ({
    modals: { ...state.modals, [name]: true }
  })),

  closeModal: (name) => set((state) => ({
    modals: { ...state.modals, [name]: false }
  })),

  closeAllModals: () => set({ modals: {} })
}));
