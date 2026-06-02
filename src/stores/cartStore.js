/**
 * Cart Store - Zustand
 * Manages shopping cart state (guest session)
 */

import { create } from 'zustand';

export const useCartStore = create((set) => ({
  items: [],
  
  addItem: (ticket, quantity) => set((state) => {
    const existingItem = state.items.find(item => item.ticket.id === ticket.id);
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.ticket.id === ticket.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      };
    }
    return { items: [...state.items, { ticket, quantity }] };
  }),

  removeItem: (ticketId) => set((state) => ({
    items: state.items.filter(item => item.ticket.id !== ticketId)
  })),

  updateQuantity: (ticketId, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.ticket.id === ticketId
        ? { ...item, quantity }
        : item
    )
  })),

  clear: () => set({ items: [] }),

  getTotal: () => {
    // TODO: Calculate total from items
    return 0;
  }
}));
