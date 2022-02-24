import React, { useState, useRef, useEffect } from "react";
import NoteList from "./NoteList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "key";

function App() {
  const [notes, setNotes] = useState([]);

  const noteNameRef = useRef();

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedNotes) setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  function toggleNote(id) {
    const newNotes = [...notes];
    const note = newNotes.find((note) => note.id === id);
    note.complete = !note.complete;
    setNotes(newNotes);
  }

  function addNote(e) {
    const name = noteNameRef.current.value;
    if (name === "") return;
    setNotes((prevNotes) => {
      return [...prevNotes, { id: uuidv4(), name: name, complete: false }];
    });
    noteNameRef.current.value = null;
  }

  function clearNote(e) {
    const newNotes = notes.filter((note) => !note.complete);
    setNotes(newNotes);
  }

  return (
    <>
      <NoteList notes={notes} toggleNote={toggleNote} />
      <input ref={noteNameRef} type="text" />
      <button onClick={addNote}>Add Note</button>
      <button onClick={clearNote}>Clear Note</button>
      <div>{notes.filter((note) => !note.complete).length} notes left</div>
    </>
  );
}

export default App;
