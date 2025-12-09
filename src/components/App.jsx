import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import storedNotes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(storedNotes);
  return (
    <div>
      <Header />
      <CreateArea setNotes={setNotes} />
      {notes.map((note) => (
        <Note
          key={note.key}
          id={note.id}
          title={note.title}
          content={note.content}
          setNotes={setNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
