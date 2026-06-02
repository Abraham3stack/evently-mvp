/**
 * Voting Store - Zustand
 * Manages voting state
 */

import { create } from 'zustand';

export const useVotingStore = create((set) => ({
  votes: {}, // { nomineeId: voteCount }
  userVote: null,
  nominees: [],

  setNominees: (nominees) => set({ nominees }),

  castVote: (nomineeId) => set((state) => ({
    votes: {
      ...state.votes,
      [nomineeId]: (state.votes[nomineeId] || 0) + 1
    },
    userVote: nomineeId
  })),

  setVotes: (votes) => set({ votes }),
  setUserVote: (nomineeId) => set({ userVote: nomineeId })
}));
