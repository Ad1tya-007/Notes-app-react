import React from "react";

export default function Note({ note, toggleNote }) {
  function handleNoteClick() {
    toggleNote(note.id);
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={note.complete}
        onChange={handleNoteClick}
      />
      {note.name}
    </div>
  );
}
