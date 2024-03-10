import React, { useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { motion } from 'framer-motion';

const FlashcardGenerator = () => {
  const [notes, setNotes] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  const dummyFlashcards = [
    { question: 'What is a neural network?', answer: 'A neural network is a series of algorithms that attempts to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates.' },
    { question: 'What is backpropagation?', answer: 'Backpropagation is a method used in artificial neural networks to calculate a gradient that is needed in the calculation of the weights to be used in the network.' },
    { question: 'What is deep learning?', answer: 'Deep learning is a subset of machine learning that uses neural networks with many layers to model and process complex data inputs.' },
    { question: 'What is a convolutional neural network (CNN)?', answer: 'A convolutional neural network (CNN) is a type of deep learning algorithm that can take in an input image, assign importance (learnable weights and biases) to various aspects/objects in the image, and be able to differentiate one from the other.' },
    { question: 'What is natural language processing (NLP)?', answer: 'Natural language processing (NLP) is a branch of artificial intelligence that helps computers understand, interpret, and generate human language in a valuable way.' }
  ];

  const generateFlashcards = () => {
    setFlashcards(dummyFlashcards);
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <motion.h2
        className=" text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Flashcard Generator
      </motion.h2>
      <textarea
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
        placeholder="Enter your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      <motion.button
        onClick={generateFlashcards}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Generate Flashcards <BiRefresh className="ml-2" />
      </motion.button>
      <div className="grid grid-cols-1 gap-4 mt-6 w-full max-w-lg">
        {flashcards.map((flashcard, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-md p-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="font-bold text-lg mb-2">{flashcard.question}</div>
            <div className="text-gray-600">{flashcard.answer}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardGenerator;
