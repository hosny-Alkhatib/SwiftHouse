import './App.css';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import LogPage from './pages/LogPage';
import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [auth, setAuth] = useState(localStorage.auth ? true : false);

  return (
    <div>
      <Router>
        <NavBar auth={auth} setAuth={setAuth} />
        <Routes>
          <Route
            path='/'
            exact
            element={auth ? <Home /> : <LogPage setAuth={setAuth} />}
          />
          {auth && (
            <>
              <Route path='/aboutus' element={<AboutUs />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
