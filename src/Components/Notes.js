import React, {useState} from 'react'


const Notes = (props) => {
    const note = [
        {
            id: 1,
            content: 'HTML is easy',
            date: '2019-05-30T17:30:31.098Z',
            important: true
        },
        {
            id: 2,
            content: 'Browser can execute only Javascript',
            date: '2019-05-30T18:39:34.091Z',
            important: false
        },
        {
            id: 3,
            content: 'GET and POST are the most important methods of HTTP protocol',
            date: '2019-05-30T19:20:14.298Z',
            important: true
        }
    ];
    const [notes, setNotes] = useState(note);
    const [showAll, setShowAll] = useState(true);

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true);

    //adding new note func
    const addNote = (event) => {
        event.preventDefault();
        const noteObject = { // Note properties
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
        };

        setNotes(notes.concat(noteObject));
        setNewNote('')
    };
    const [newNote, setNewNote] = useState(
        ''
    );
    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value)
    }
    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all' }
                </button>
            </div>

            {notesToShow.map(note =>
                <li key={note.id}>
                    {note.content}
                </li>
            )}
            <form onSubmit={addNote}>
                <input value={newNote}
                       onChange={handleNoteChange}
                />

                <button type="submit">save</button>
            </form>
        </div>
    )
};

export default Notes