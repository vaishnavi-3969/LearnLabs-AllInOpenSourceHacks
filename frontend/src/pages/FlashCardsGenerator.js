import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlashcardGenerator = () => {
  const dummyData = {
    result: {
      flashcards: [
        { front: "Black Box Testing", back: "A method of software testing that examines the functionality of an application without peering into its internal structures or workings." },
        { front: "White Box Testing", back: "A form of application testing that provides the tester with complete knowledge of the application being tested, including access to source code and design documents." },
        { front: "Unit Testing", back: "A level of software testing where individual components or functions of a software application are tested in isolation." },
        { front: "Integration Testing", back: "The phase in software testing where individual software modules are combined and tested as a group to ensure they work together as expected." },
        { front: "System Testing", back: "The process of testing an integrated system to verify that it meets specified requirements." },
        { front: "Acceptance Testing", back: "A type of testing to determine whether the system satisfies the acceptance criteria and to enable the customer to determine whether to accept the system." },
        { front: "Regression Testing", back: "Testing conducted to ensure that a recent program or code change has not adversely affected existing features." },
        { front: "Load Testing", back: "The process of putting demand on a system and measuring its response. It helps ensure that a software application can handle the expected load without performance degradation." },
        { front: "Usability Testing", back: "Testing that evaluates a product's user interface to ensure it is easy to use." },
        { front: "Security Testing", back: "A type of testing to ensure that the software systems and applications are secure." }
      ]
    }
  };

  const [flashcards, setFlashcards] = useState(dummyData.result.flashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [showFlashcards, setShowFlashcards] = useState(false);

  const handleFlipCard = () => {
    setShowBack(!showBack);
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowBack(false);
  };

  const currentFlashcard = flashcards[currentIndex];

  const handleShowFlashcards = () => {
    setShowFlashcards(true);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen overflow-hidden">
      <h2 className="text-3xl font-bold mb-6">Flashcard Generator</h2>
      {showFlashcards ? (
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="bg-white shadow-md rounded-md p-4 mt-4 cursor-pointer"
            onClick={handleFlipCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.5 }}            
          >
            <div className="font-bold text-lg mb-2">{showBack ? currentFlashcard.back : currentFlashcard.front}</div>
            {!showBack && <div className="text-gray-600">Click to flip</div>}
          </motion.div>
        </AnimatePresence>
      ) : (
        <button onClick={handleShowFlashcards} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4">
          Generate Flashcards
        </button>
      )}
      <button
        onClick={handleNextCard}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
      >
        Next Flashcard
      </button>
    </div>
  );
};

export default FlashcardGenerator;
