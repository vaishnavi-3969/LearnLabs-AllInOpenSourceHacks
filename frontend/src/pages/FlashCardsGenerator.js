import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FlashcardGenerator = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const topic = 'Black Box Testing';
      try {
        const response = await fetch('http://localhost:8000/api/flashcards/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ topic: topic }),
        });

        const data = await response.json();
        console.log(data);
        setFlashcards(data.result.flashcards);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
      }
    };

    fetchFlashcards();
  }, []);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen overflow-hidden">
      <h2 className="text-3xl font-bold mb-6">Flashcard Generator</h2>
      {currentFlashcard && (
        <motion.div
          key={currentIndex}
          className="bg-white shadow-md rounded-md p-4 mt-4 cursor-pointer"
          onClick={handleNextCard}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-bold text-lg mb-2">{currentFlashcard.front}</div>
          <div className="text-gray-600">{currentFlashcard.back}</div>
        </motion.div>
      )}
    </div>
  );
};

export default FlashcardGenerator;
