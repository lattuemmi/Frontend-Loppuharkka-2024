import { create } from "zustand";

const notesURL = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes";

const useNoteStore = create((set) => ({
  notes: [],
  fetchNotes: async () => {
    const response = await fetch(notesURL);
    const data = await response.json();
    set((state) => ({
      notes: [...state.notes, ...data.filter(apiNote => !state.notes.some(note => note.id === apiNote.id))],
    }));
  },
  addNote: (newNote) => {
    set((state) => ({
      notes: [newNote, ...state.notes],
    }));
  },
  removeNote: (id) => {
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    }));
  },

}));

export default useNoteStore;
