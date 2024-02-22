import { useState } from 'react';
const Form = ({ajoutNote}) => {

    const [note, setNote] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        ajoutNote(note); 
        setNote('');
    };
    return(
        <>
        <textarea className="border-5 border-white" name="note" placeholder="Entrez votre note ici... "  value={note} onChange={(e) => {setNote(e.target.value);}}></textarea>
        <button onClick={addNote}>Ajouter</button>

        </>
    );

};
export default Form;