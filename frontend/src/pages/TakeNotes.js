import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useAuth0 } from '@auth0/auth0-react';
import { database } from '../components/Firebase';
import { ref, push, onValue, remove, set } from 'firebase/database';

const TakeNotes = () => {
  const { user } = useAuth0();
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [isTakingNotes, setIsTakingNotes] = useState(false);
  const [previewNote, setPreviewNote] = useState(null);
  const [editNoteIndex, setEditNoteIndex] = useState(null);

  useEffect(() => {
    const notesRef = ref(database, `notes/${user.sub}`);
    onValue(notesRef, (snapshot) => {
      const notesData = snapshot.val();
      if (notesData) {
        setNotes(Object.values(notesData));
      } else {
        setNotes([]);
      }
    });
  }, [user.sub]);

  const handleTakeNotes = () => {
    setInputValue('');
    setIsTakingNotes(true);
    setEditNoteIndex(null);
  };

  const handleSaveNote = () => {
    if (inputValue.trim() !== '') {
      const newNote = {
        title: title || 'Untitled',
        content: inputValue,
        subject: 'Your Note Subject',
        tags: tags.split(',').map(tag => tag.trim()),
        date: new Date().toDateString(),
        timestamp: new Date().getTime(),
      };

      const notesRef = ref(database, `notes/${user.sub}`);
      push(notesRef, newNote);

      setInputValue('');
      setTitle('');
      setTags('');
      setIsTakingNotes(false);
    }
  };

  const handleEditNote = (index) => {
    setInputValue(notes[index].content);
    setTitle(notes[index].title);
    setTags(notes[index].tags.join(', '));
    setIsTakingNotes(true);
    setEditNoteIndex(index);
  };

  const handlePreviewNote = (index) => {
    setPreviewNote(notes[index]);
  };


  const handleDeleteNote = (index) => {
    const noteToDelete = notes[index];
    const noteId = noteToDelete.id; // Assuming each note has an "id" field
    const noteRef = ref(database, `notes/${user.sub}/${noteId}`);
    remove(noteRef)
      .then(() => console.log('Note deleted successfully'))
      .catch(error => console.error('Error deleting note:', error));
  };

  const handleSaveEditNote = () => {
    if (inputValue.trim() !== '') {
      const updatedNote = {
        ...notes[editNoteIndex],
        title: title || 'Untitled',
        content: inputValue,
        tags: tags.split(',').map(tag => tag.trim()),
        date: new Date().toDateString(),
        timestamp: new Date().getTime(),
      };

      const noteId = notes[editNoteIndex].id; // Assuming each note has an "id" field
      const noteRef = ref(database, `notes/${user.sub}/${noteId}`);
      set(noteRef, updatedNote)
        .then(() => {
          setInputValue('');
          setTitle('');
          setTags('');
          setIsTakingNotes(false);
          setEditNoteIndex(null);
        })
        .catch(error => console.error('Error updating note:', error));
    }
  };

  return (
    <div className="min-w-md mx-auto mt-8 p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Note Taking</h2>
      {!isTakingNotes && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
          onClick={handleTakeNotes}
        >
          Take Notes
        </button>
      )}
      {isTakingNotes && (
        <>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-md p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="border rounded-md p-2 mb-2"
          />
          <Editor
            apiKey='7sv28nl1nulkab1v8uyi89tee6axs5wt906zjyjkv9gh6rao'
            init={{
              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ],
              ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
            }}
            initialValue="Welcome to TinyMCE!"
          />
          <div className="flex justify-between mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={editNoteIndex !== null ? handleSaveEditNote : handleSaveNote}
            >
              {editNoteIndex !== null ? 'Save Changes' : 'Save Note'}
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={() => {
                setInputValue('');
                setTitle('');
                setTags('');
                setIsTakingNotes(false);
                setEditNoteIndex(null);
              }}
            >
              Cancel
            </button>
          </div>
        </>
      )}
      {notes.map((note, index) => (
        <div key={index} className="border rounded-md p-2 mb-2 cursor-pointer">
          <div className="font-semibold" onClick={() => handlePreviewNote(index)}>
            {note.title || 'Untitled'}
          </div>
          <div className="text-gray-500 text-sm">Tags: {note.tags.join(', ')}</div>
          {previewNote && previewNote.timestamp === note.timestamp && (
            <div>
              <div dangerouslySetInnerHTML={{ __html: note.content }} />
              <div className="text-gray-500 text-sm">Date: {note.date}</div>
              <button className="text-blue-500 hover:underline" onClick={() => handleEditNote(index)}>Edit</button>
              <button className="text-red-500 hover:underline" onClick={() => handleDeleteNote(index)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TakeNotes;
