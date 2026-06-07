import { useState, useRef, useEffect, useContext } from 'react';
import NoteContext from '../context/NoteContext.jsx';

function NoteForm() {
  // Беремо функцію addNote з контексту
  const { addNote } = useContext(NoteContext);

  // Локальний стейт форми (поля вводу)
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  // Реф для прямого доступу до DOM-елемента input (для фокусу)
  const titleRef = useRef(null);

  // Після першого рендеру встановити курсор у поле заголовка
  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  // Обробник сабміту форми
  function handleSubmit(e) {
    e.preventDefault(); // не дати сторінці перезавантажитися
    if (!title.trim()) return; // ігнорувати порожній заголовок

    addNote(title, text); // викликаємо функцію з контексту
    setTitle(''); // очищуємо поля
    setText('');

    titleRef.current?.focus(); // повертаємо фокус у заголовок
  }

  const inputClass =
    'w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 outline-none';

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-gray-300 bg-white p-4 space-y-3"
    >
      <input
        ref={titleRef}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Заголовок"
        className={inputClass}
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Текст нотатки"
        rows="3"
        className={inputClass}
      />
      <button
        type="submit"
        className="rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-800"
      >
        Додати нотатку
      </button>
    </form>
  );
}

export default NoteForm;
