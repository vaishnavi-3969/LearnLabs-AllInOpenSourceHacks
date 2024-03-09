import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-white text-center md:text-left mb-8 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">LearnLabs</h3>
                    <p className="text-sm">Your AI-powered education helper app for students and teachers.</p>
                </div>
                <div className="flex justify-center md:justify-end space-x-4">
                    <Link to="#" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Privacy Policy</Link>
                    <Link to="#" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Terms of Service</Link>
                    <Link to="#" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
