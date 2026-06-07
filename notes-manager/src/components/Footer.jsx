import { useContext } from 'react';
import NoteContext from '../context/NoteContext.jsx';

function Footer() {
  const { notes } = useContext(NoteContext);

  return (
    <footer className="text-center text-sm text-gray-500 pt-2">
      Усього нотаток: {notes.length}
    </footer>
  );
}

export default Footer;
