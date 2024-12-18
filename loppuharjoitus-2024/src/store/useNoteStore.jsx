import { create } from "zustand";

const notesURL = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes";

const useNoteStore = create((set) => ({
  notes: [],
  fetchNotes: async () => {
    const response = await fetch(notesURL);
    const data = await response.json();
    set({ notes: data });
  },
  addNote: (newNote) => {
    set((state) => ({
      notes: [newNote, ...state.notes],
    }));
  },
}));

export default useNoteStore;
