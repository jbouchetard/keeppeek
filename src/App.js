import './App.css';
import Form from './pages/Form.js';
import Header from './pages/Header.js';
import List from './pages/List.js';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [note, setNote] = useState([
    { textNote: 'Vos notes sont ici' },
  ]);

  const ajoutNote = (notes) => {
    const tmpNote = [...note];
    tmpNote.push({ textNote: notes });
    setNote(tmpNote);
  };
  const removeNote = (index) => {
    const tmpNote = [...note];
    tmpNote.splice(index, 1);
    setNote(tmpNote);
  };

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (loaded) localStorage.setItem('note', JSON.stringify(note));
  })

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('note') || "[]");
    setNote(data);
    setLoaded(true);
  }, []);


  const [install, setInstall] = useState(false);

  const deferredPrompt = useRef(null); 


  useEffect(() => {
    const handler = (e) => {

    e.preventDefault();
    setInstall(e.prompt);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => {
    window.removeEventListener('beforeinstallprompt', handler);
    };
    }, []);
    
const handleInstall = () => {
deferredPrompt.current.prompt();
deferredPrompt.current.userChoice.then((choiceResult) => {
if (choiceResult.outcome === 'accepted') {
alert("Merci d'avoir installé l'application !")
} else {
console.log('L\'utilisateur a refusé l\'installation');
}
deferredPrompt.current = null;
});
setInstall(false);
}



  
  return (
    <>
      <Header />
      <Form ajoutNote={ajoutNote} />
      <List note={note} removeNote={removeNote} />



      {install && (
        <div className="bg-gray-300 shadow-gray-700 p-4 flex items-center">
          <div className='flex-grow text-center'>Voulez-vous installer
            l'application sur votre appareil ?</div>
          <button className="px-4 py-2 rounded text-white bg-teal-600" onClick=
            {handleInstall}>Installer</button>
        </div>
      )}



    </>
  )
}

export default App;
