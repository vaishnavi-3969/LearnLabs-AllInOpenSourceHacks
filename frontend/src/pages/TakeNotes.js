import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TakeNotes = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTakingNotes, setIsTakingNotes] = useState(false);
  const [previewNoteIndex, setPreviewNoteIndex] = useState(null);

  const handleEditorChange = (content) => {
    setInputValue(content);
  };

  const handleTakeNotes = () => {
    setIsTakingNotes(true);
  };

  const handleSaveNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
      setIsTakingNotes(false);
    }
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
            apiKey="7sv28nl1nulkab1v8uyi89tee6axs5wt906zjyjkv9gh6rao" 
            value={inputValue}
            init={{
              height: 500, 
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help'
            }}
            onEditorChange={handleEditorChange}
          />
          <div className="flex justify-between mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleSaveNote}
            >
              Save Note
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={() => setIsTakingNotes(false)}
            >
              Cancel
            </button>
          </div>
        </>
      )}
      {notes.map((note, index) => (
        <div key={index} className="border rounded-md p-2 mb-2 cursor-pointer" onClick={() => handlePreviewNote(index)}>
          Note {index + 1}
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
