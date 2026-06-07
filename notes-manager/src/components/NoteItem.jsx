import { useContext } from 'react';
import NoteContext from '../context/NoteContext.jsx';

// Деструктуризація props: одразу беремо поле note
function NoteItem({ note }) {
  // Функцію видалення беремо з контексту
  const { deleteNote } = useContext(NoteContext);

  return (
    <li className="rounded-lg border border-gray-300 bg-white p-4 flex justify-between gap-3">
      <div>
        <h3 className="font-medium">{note.title}</h3>
        {/* Умовний рендеринг: текст показуємо тільки якщо він є */}
        {note.text && <p className="text-sm text-gray-600">{note.text}</p>}
      </div>
      <button
        onClick={() => deleteNote(note.id)}
        className="self-start rounded-md bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300"
      >
        Видалити
      </button>
    </li>
  );
}

export default NoteItem;
