const List = ({ note, removeNote }) => {


    return (
            <ul className="bg-green-200">
                {note.map((notes, index) =>(
                    <li key={index}>
                        <p className="border-5 border-white">{notes.textNote}</p>
                        <button onClick={() => removeNote(notes)}>Supprimer note</button>
                    </li>
                ))}

            </ul>
    );
};
export default List;