const List = ({ note, removeNote }) => {


    return (
            <ul className="grid grid-cols-1 content-center text-2xl">
                {note.map((notes, index) =>(
                    <li className="m-5 p-2 border-2 rounded-md" key={index}>
                        <p className="text-semibold">{notes.textNote}</p>
                        <button onClick={() => removeNote(notes)}>Supprimer note</button>
                    </li>
                ))}

            </ul>
    );
};
export default List;