import { useState } from 'react';
import NoteContext from './context/NoteContext.jsx';
import Header from './components/Header.jsx';
import NoteForm from './components/NoteForm.jsx';
import NoteSearch from './components/NoteSearch.jsx';
import NoteList from './components/NoteList.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Список усіх нотаток
  const [notes, setNotes] = useState([]);
  // Поточний пошуковий запит
  const [search, setSearch] = useState('');

  // Додавання нової нотатки
  function addNote(title, text) {
    const newNote = {
      id: Date.now(), // унікальний id на основі поточного часу
      title: title,
      text: text,
    };
    setNotes([...notes, newNote]); // новий масив = старі нотатки + нова
  }

  // Видалення нотатки за id
  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    // Provider робить значення доступним усім нащадкам через useContext
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, search, setSearch }}
    >
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <div className="mx-auto max-w-xl px-4 py-8 space-y-4">
          <Header />
          <NoteForm />
          <NoteSearch />
          <NoteList />
          <Footer />
        </div>
      </div>
    </NoteContext.Provider>
  );
}

export default App;
