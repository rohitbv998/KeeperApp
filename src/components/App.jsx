import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [note, setNote] = useState([]);

  function handleClick(title, content) {
    setNote((preValues) => {
      return [...preValues, { title: title, content: content }];
    });
  }

  function deleteNote(id) {
    console.log(id);

    setNote((prevValue) => {
      return prevValue.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick={handleClick} />
      {note.map((notes, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notes.title}
            content={notes.content}
            deleteNote={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
