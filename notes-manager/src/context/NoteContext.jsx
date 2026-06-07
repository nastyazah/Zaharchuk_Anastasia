import { createContext } from 'react';

// Створюємо контекст. Через нього передаватимемо нотатки і функції
// (addNote, deleteNote, search, setSearch) усім компонентам без props-drilling.
const NoteContext = createContext();

export default NoteContext;
