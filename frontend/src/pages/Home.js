import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl font-bold mb-8 text-center"
        >
          Welcome {isAuthenticated ? user.name : 'to LearnLabs'}!
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg text-center max-w-lg mb-12"
        >
          Your AI-powered education helper app for students and teachers. Explore our features below and start your learning journey today!
        </motion.div>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-4xl"
        >
          {/* Feature 1: Flashcards Generator */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Flashcards Generator</h2>
            <p className="text-lg text-center mb-6">Create flashcards for any topic to enhance your learning experience.</p>
            <Link to="/flashcard-generator" className="text-blue-600 font-semibold hover:underline">Learn More</Link>
          </motion.div>

          {/* Feature 2: Notes Formatter */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Notes Formatter</h2>
            <p className="text-lg text-center mb-6">Organize and format your notes efficiently with our AI-powered tool.</p>
            <Link to="/notes-formatter" className="text-blue-600 font-semibold hover:underline">Learn More</Link>
          </motion.div>

          {/* Feature 3: Practice Questions Generator */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Practice Questions Generator</h2>
            <p className="text-lg text-center mb-6">Generate practice questions for any topic to test your understanding.</p>
            <Link to="/practice-questions-generator" className="text-blue-600 font-semibold hover:underline">Learn More</Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
