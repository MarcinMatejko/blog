import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddPost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const { addPost } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newPost = {
      id: Math.floor(Math.random() * 100000000),
      title,
      text
    }

    addPost(newPost);
  }

  return (
    <div>
      <h3>Dodaj nowego posta</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Tytuł</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Podaj tytuł posta" />
        </div>
        <div className="form-control">
        <label htmlFor="text">Treść</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Dodaj treść twojego posta" />
        </div>
        <button className="btn">Dodaj posta</button>
      </form>
    </div>
  )
}
