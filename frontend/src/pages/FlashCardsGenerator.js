import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiCheckCircle } from 'react-icons/bi';
import { IoIosAddCircle } from 'react-icons/io';
import { AiFillCloseCircle } from 'react-icons/ai';

const FlashcardGenerator = () => {
  const [notes, setNotes] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [isGenerated, setIsGenerated] = useState(false);

  const generateFlashcards = async() => {
    const url = 'https://sameerbhatia-proprofs-flashcards-maker.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'eed6d8f822mshcb87f3c9cadde67p1514bfjsnc6d5421bf604',
        'X-RapidAPI-Host': 'sameerbhatia-proprofs-flashcards-maker.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    const generatedFlashcards = [
     
      { question: 'Question 1?', answer: 'Answer 1' },
      { question: 'Question 2?', answer: 'Answer 2' },
      { question: 'Question 3?', answer: 'Answer 3' },
    ];

    setFlashcards(generatedFlashcards);
    setIsGenerated(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-200">
      <div className="w-full px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Flashcard Generator</h2>
        <textarea
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Enter your notes here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
          onClick={generateFlashcards}
        >
          Generate Flashcards
        </motion.button>
        {isGenerated && (
          <div className="flex flex-col space-y-4">
            {flashcards.map((flashcard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-4 bg-gray-100 rounded-md shadow-md"
              >
                <div className="text-lg font-semibold">{flashcard.question}</div>
                <div className="mt-2">{flashcard.answer}</div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-0 right-0 text-green-500"
                  onClick={() => console.log('Mark as mastered')}
                >
                  <BiCheckCircle size={24} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardGenerator;
