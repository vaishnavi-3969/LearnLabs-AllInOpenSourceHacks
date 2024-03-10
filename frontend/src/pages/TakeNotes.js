import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useAuth0 } from '@auth0/auth0-react';

const TakeNotes = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTakingNotes, setIsTakingNotes] = useState(false);
  const [previewNoteIndex, setPreviewNoteIndex] = useState(null);
  const { user } = useAuth0();
  const [editNoteIndex, setEditNoteIndex] = useState(null);

  const handleTakeNotes = () => {
    setInputValue('');
    setIsTakingNotes(true);
    setEditNoteIndex(null);
  };

  const handleSaveNote = () => {
    if (inputValue.trim() !== '') {
      if (editNoteIndex !== null) {
        // If editing existing note
        const updatedNotes = [...notes];
        updatedNotes[editNoteIndex] = inputValue;
        setNotes(updatedNotes);
        setEditNoteIndex(null);
      } else {
        // If adding new note
        setNotes([...notes, inputValue]);
      }
      setInputValue('');
      setIsTakingNotes(false);
    }
  };

  const handleEditNote = (index) => {
    setInputValue(notes[index]);
    setIsTakingNotes(true);
    setEditNoteIndex(index);
  };

  const handlePreviewNote = (index) => {
    setPreviewNoteIndex(index);
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
          <Editor
            apiKey='7sv28nl1nulkab1v8uyi89tee6axs5wt906zjyjkv9gh6rao'
            value={inputValue}
            init={{
              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: user.name, title: 'Name' },
                { value:user.email, title: 'Email' },
              ],
              ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
            }}
            onEditorChange={setInputValue}
          />
          <div className="flex justify-between mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleSaveNote}
            >
              {editNoteIndex !== null ? 'Save Changes' : 'Save Note'}
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={() => {
                setInputValue('');
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
        <div key={index} className="border rounded-md p-2 mb-2 cursor-pointer" onClick={() => handlePreviewNote(index)}>
          Note {index + 1}
          <span
            className="ml-2 text-sm text-blue-500 cursor-pointer"
            onClick={() => handleEditNote(index)}
          >
            (Edit)
          </span>
        </div>
      ))}
      {previewNoteIndex !== null && (
        <div className="mt-4 border rounded-md p-2">
          <div dangerouslySetInnerHTML={{ __html: notes[previewNoteIndex] }} />
        </div>
      )}
    </div>
  );
};

export default TakeNotes;
