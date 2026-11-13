import { create } from "zustand";

interface SearchState {
  term: string;
  setTerm: (term: string) => void;
}

export const useSearch = create<SearchState>((set) => ({
  term: "",
  setTerm: (term) => set({ term }),
}));
