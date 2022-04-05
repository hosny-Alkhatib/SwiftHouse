import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ auth, setAuth }) {
  const logout = () => {
    localStorage.removeItem('auth');
    setAuth(false);
  };
  return (
    <div>
      <nav>
        <Link to='/' className='links'>
          <h2 style={{ color: 'white' }}>SwiftHouse</h2>
        </Link>
        {auth && (
          <>
            <ul className='navLinks'>
              <Link to='/' className='links'>
                <li>Home</li>
              </Link>
              <Link to='/aboutus' className='links'>
                <li>About Us</li>
              </Link>
            </ul>
          </>
        )}
        <div>
          <span className='navbar__status'>
            {auth ? (
              <button className='navBtn' onClick={logout}>
                <Link to='/' className='links'>
                  Logout
                </Link>
              </button>
            ) : (
              <Link to='/' className='links'>
                Login
              </Link>
            )}
          </span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
