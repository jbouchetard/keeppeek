import './App.css';
import Form from './pages/Form.js';
import Header from './pages/Header.js';
import List from './pages/List.js';
import {useState, useEffect} from 'react';

function App() {
  const [note, setNote] = useState([
    {textNote:'Vos notes sont ici'},
  ]);

  const ajoutNote = (notes) => {
    const tmpNote = [...note];
    tmpNote.push({textNote: notes});
    setNote(tmpNote);
  };
  const removeNote = (index) => {
    const tmpNote = [...note];
    tmpNote.splice(index, 1);
    setNote(tmpNote);
  };

  // const [loaded, setLoaded] = useState(false)
  // useEffect(() => {
  //   if(loaded) localStorage.setItem('note', JSON.stringify(note));
  // })

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('note') || "[]");
  //   setNote(data);
  //   setLoaded(true);
  // },[]);


  return (
    <>
      <Header />
      <Form ajoutNote={ajoutNote} />
      <List note={note} removeNote={removeNote}/>
    </>
  )


}

export default App;
