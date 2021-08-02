import React, { useState } from "react";

function CreateArea(props) {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  function handleTitleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleContentChange(event) {
    const value = event.target.value;
    setContent(value);
  }

  function submit(event) {
    event.preventDefault();
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          value={title}
          onChange={handleTitleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={content}
          name="content"
          onChange={handleContentChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.handleClick(title, content);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
