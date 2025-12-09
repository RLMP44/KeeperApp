import React, { useState } from "react";

function CreateArea(props) {
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");
  function handleTitleChange(event) {
    setTitleText(event.target.value);
  }
  function handleContentChange(event) {
    setContentText(event.target.value);
  }
  function handleClick(event) {
    props.setNotes((prevNotes) => {
      var lastID = prevNotes.at(-1).id;
      var nextID = lastID + 1;

      return [
        ...prevNotes,
        {
          key: nextID,
          id: nextID,
          title: titleText,
          content: contentText,
        },
      ];
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitleChange}
          name="title"
          placeholder="Title"
          value={titleText}
        />
        <textarea
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
