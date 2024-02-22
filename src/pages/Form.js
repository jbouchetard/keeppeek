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
        <div className='flex justify-center'>
        <textarea className="border-5 border-white" name="note" placeholder="Entrez votre note ici... "  value={note} onChange={(e) => {setNote(e.target.value);}}></textarea>
        <button className='p-5 ' onClick={addNote}>Ajouter</button>
        </div>
        </>
    );

};
export default Form;