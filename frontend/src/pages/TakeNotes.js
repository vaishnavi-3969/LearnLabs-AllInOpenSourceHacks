import React, { useState } from 'react';

const TakeNotes = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Note Taking</h2>
      <textarea
        className="w-full h-40 border rounded-md p-2 mb-4"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type your note here..."
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleAddNote}
      >
        Add Note
      </button>
      <div className="mt-4">
        {notes.map((note, index) => (
          <div key={index} className="border rounded-md p-2 mb-2">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TakeNotes;
