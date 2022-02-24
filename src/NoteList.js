import React from "react";
import Note from "./Note";

export default function NoteList({ notes, toggleNote }) {
  return notes.map((note) => {
    return <Note key={note.id} toggleNote={toggleNote} note={note} />;
  });
}
