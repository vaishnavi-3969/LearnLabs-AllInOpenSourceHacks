import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PracticeQuestionsGenerator = () => {
  const jsonData = {
    result: {
      questions: [
        { question: "What is the main goal of Black Box Testing?", answer: "To test the functionality of an application without knowing its internal details." },
        { question: "Explain the concept of Regression Testing.", answer: "Testing conducted to ensure that recent changes haven't adversely affected existing features." },
        { question: "In White Box Testing, what does the tester have access to?", answer: "Complete knowledge of the application, including source code and design documents." },
        { question: "What is the purpose of Load Testing?", answer: "To measure a system's response under different levels of demand." },
        { question: "Define Acceptance Testing.", answer: "Testing to determine if the system satisfies acceptance criteria and is ready for customer acceptance." },
        { question: "How does Unit Testing contribute to software development?", answer: "It tests individual components or functions in isolation to ensure they work correctly." },
        { question: "What is the focus of Usability Testing?", answer: "Evaluating a product's user interface to ensure it is easy to use." },
        { question: "Why is Security Testing important?", answer: "To ensure that software systems and applications are secure and protected against vulnerabilities." },
        { question: "What does Integration Testing involve?", answer: "Combining and testing individual software modules as a group to ensure they work together." },
        { question: "Explain the concept of System Testing.", answer: "The process of testing an integrated system to verify that it meets specified requirements." }
      ]
    }
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 }
  };

  const [generating, setGenerating] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);

  const handleGenerateQuestions = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setShowQuestions(true);
    }, 1000);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <h2 className="text-3xl font-bold mb-6">Practice Questions Generator</h2>
      {generating ? (
        <div className="text-lg font-bold mb-4">Generating questions...</div>
      ) : (
        <button onClick={handleGenerateQuestions} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4">
          Generate Questions
        </button>
      )}
      {showQuestions && jsonData.result.questions.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-md rounded-md p-4 mt-4 cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="font-bold text-lg mb-2">{item.question}</div>
          <div className="text-gray-600">{item.answer}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default PracticeQuestionsGenerator;
