import { useContext } from 'react';
import NoteContext from '../context/NoteContext.jsx';
import NoteItem from './NoteItem.jsx';

function NoteList() {
  const { notes, search } = useContext(NoteContext);

  // Фільтруємо нотатки за пошуковим запитом (по заголовку, нечутливо до регістру)
  const filtered = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  // Умовний рендеринг: якщо нотаток нема — показуємо повідомлення
  if (filtered.length === 0) {
    return (
      <div className="rounded-lg border border-gray-300 bg-white p-4 text-gray-500">
        Нотаток немає
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {filtered.map((note) => (
        // key потрібен React для ефективного оновлення списку
        // note передається в NoteItem через props
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default NoteList;
