import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {FaUser} from 'react-icons/fa';

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/" className="text-white font-bold text-lg">LearnLabs</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                        <Link to="/flashcards" className="text-white hover:text-gray-300">Flashcards</Link>
                        <Link to="/notes" className="text-white hover:text-gray-300">Notes</Link>
                        <Link to="/practice" className="text-white hover:text-gray-300">Practice</Link>
                        <Link to="/profile" className="text-white hover:text-gray-300"><FaUser/></Link>
                        {isAuthenticated ? (
                            <button
                                onClick={() => logout({ returnTo: window.location.origin })}
                                className="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                            >
                                Log Out
                            </button>
                        ) : (
                            <button
                                onClick={loginWithRedirect}
                                className="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                            >
                                Log In
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
