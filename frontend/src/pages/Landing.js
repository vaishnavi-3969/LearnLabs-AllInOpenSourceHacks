import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';

const Landing = () => {
    const { loginWithRedirect } = useAuth0();

    const scrollFeatures = () => {
        const featuresSection = document.getElementById('features');
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="py-[70px] flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-purple-600 text-white">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-6xl font-bold mb-8 text-center"
            >
                Welcome to LearnLabs
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-lg text-center max-w-lg mb-12"
            >
                Your AI-powered education helper app for students and teachers. Explore our features below and start your learning journey today!
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mb-16 flex flex-col items-center space-y-8"
            >

                <button onClick={scrollFeatures} className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg">
                    Explore Features
                </button>

                <button onClick={() => loginWithRedirect()} className="bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out shadow-lg">
                    Sign Up for Free
                </button>
            </motion.div>

            {/*key features */}
            <section id='features' className="flex flex-col items-center justify-center mt-24">
                <h2 className="text-4xl font-bold mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center space-y-4">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-6xl text-white bg-gradient-to-br from-yellow-400 to-red-500 rounded-full h-24 w-24 flex items-center justify-center shadow-lg"
                        >
                            📚
                        </motion.div>
                        <h3 className="text-2xl font-semibold">Flashcards Generator</h3>
                        <p className="text-lg text-center">Generate flashcards for any given topic</p>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-6xl text-white bg-gradient-to-br from-yellow-400 to-red-500 rounded-full h-24 w-24 flex items-center justify-center shadow-lg"
                        >
                            🧠
                        </motion.div>
                        <h3 className="text-2xl font-semibold">Notes Formatter</h3>
                        <p className="text-lg text-center">Organize and format notes under headings</p>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-6xl text-white bg-gradient-to-br from-yellow-400 to-red-500 rounded-full h-24 w-24 flex items-center justify-center shadow-lg"
                        >
                            🎓
                        </motion.div>
                        <h3 className="text-2xl font-semibold">Practice Questions Generator</h3>
                        <p className="text-lg text-center">Generate practice questions for any topic</p>
                    </div>
                </div>
            </section>

            {/* call to action */}
            <div className="mt-16">
                <Link to="/contact" className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg">
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default Landing;
