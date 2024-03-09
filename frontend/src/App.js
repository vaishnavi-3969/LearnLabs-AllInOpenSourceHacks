import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path='' />
            </>
          ) : (
            <>
              <Route path='' />
            </>
          )}
          <Route path='*' element=<NotFound /> exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
