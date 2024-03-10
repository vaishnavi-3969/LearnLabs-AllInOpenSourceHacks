import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FlashCardsGenerator, Home, Landing, NotFound, Profile, TakeNotes } from './pages';
import { Footer, Navbar } from './components';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <BrowserRouter>
        {
          isAuthenticated && <Navbar />
        }
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path='/' element=<Home /> />
              <Route path='/take-notes' element=<TakeNotes/>/>
              <Route path='/profile' element=<Profile/>/>
              <Route path='/flash-cards-generator' element=<FlashCardsGenerator/>/>
            </>
          ) : (
            <>
              <Route path='/' element=<Landing /> />
            </>
          )}
          <Route path='*' element=<NotFound /> />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
