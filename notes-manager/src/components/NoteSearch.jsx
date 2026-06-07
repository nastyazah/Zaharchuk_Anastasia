import { useContext } from 'react';
import NoteContext from '../context/NoteContext.jsx';

function NoteSearch() {
  // Беремо search і setSearch з контексту, щоб не передавати через props
  const { search, setSearch } = useContext(NoteContext);

  return (
    <div className="rounded-lg border border-gray-300 bg-white p-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Пошук за заголовком"
        className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 outline-none"
      />
    </div>
  );
}

export default NoteSearch;
