import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [notes, setNotes] = useState([]);

  // Fetch all notes
  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes")
      .then(res => {
        setNotes(res.data.notes);
      })
      .catch(err => console.log(err));
  }

  // Run once on load
  useEffect(() => {
    fetchNotes();
  }, []);

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })
    .then(res => {
      console.log(res.data);

      // Refresh notes
      fetchNotes();

      // Clear form
      e.target.reset();
    })
    .catch(err => console.log(err));
  }

  function handledeletenote(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    })
    
  }

  function handleupdatenote(noteId){
    axios.patch("http://localhost:3000/api/notes"+noteId)
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    })
  }

  return (
    <>
      {/* Create Note Form */}
      <form className="note-create" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Enter title"
          required
        />

        <input
          name="description"
          type="text"
          placeholder="Enter description"
          required
        />

        <button type="submit">Create Note</button>
      </form>

      {/* Notes List */}
      <div className="notes">
        {notes.map((note) => (
          <div className="note" key={note._id}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button  className="delete" onClick={()=>{handledeletenote(note._id)}}>delete</button>
            <button className="update" onClick={()=>{handleupdatenote(note._id)}}>update</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
