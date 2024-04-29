// src/components/Header/Header.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ user }) {
  const navigate = useNavigate();

  const handlelogout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
    sessionStorage.clear();
    navigate('/');
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={{color: '#DDE6ED'}}>
        <div className="container-fluid align-items-center justify-content-center justify-content-md-between">
          <Link className="navbar-brand ms-5" to="/">DevOpsDocker</Link>
          <button className="navbar-toggler focus-ring" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="menu-icon"><i className="bi bi-list"></i></span>
          </button>
          <div className="collapse navbar-collapse align-items-center justify-content-lg-around" id="navbarNav">
            {/* menu */}
            <ul className="navbar-nav me-lg-5 mb-lg-0">
              <li className="nav-item me-lg-4 mb-1 mb-lg-0">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item me-lg-4 mb-1 mb-lg-0 h-dropdown">
                <Link className="nav-link h-dropdown-toggle" to="/networking" data-bs-toggle='h-dropdown' aria-expanded="false">
                  Network Calculator
                </Link>
                <ul className='dropdown-menu'>
                  <li><Link to='/networking/ipv4' className='dropdown-item'>IPv4</Link></li>
                  <li><Link to='/networking/ipv6' className='dropdown-item'>IPv6</Link></li>
                </ul>
              </li>
              <li className="nav-item me-lg-4 mb-1 mb-lg-0 h-dropdown">
                <Link className="nav-link" to="/converters" role='button' data-bs-toggle='h-dropdown' aria-expanded='false'>
                  Converters
                </Link>
                <ul className='dropdown-menu'>
                  <li><Link to='/converters/base64-encode' className='dropdown-item'>Base64-Encode</Link></li>
                  <li><Link to='/converters/base64-decode' className='dropdown-item'>Base64-Decode</Link></li>
                </ul>
              </li>
            </ul>
            {user ?
              <ul className='navbar-nav me-lg-5 mb-lg-0'>
                <li className="nav-item me-lg-4 mb-2 mb-lg-0">
                  <Link className="nav-link" 
                    to={`/${user.displayName}/timer`}>
                      Pomodoro
                  </Link>
                </li>
                <li className='nav-item me-lg-4 mb-1 mb-lg-0 dropdown'>
                  <button className='px-3 py-1 mx-auto rounded-pill border border-info-subtle d-flex align-items-center dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {user.avatar.imgType === 'text' ?  
                      <span className="avatar me-2">{user.avatar.data}</span>
                      :
                      <img src={user.avatar.data} className='me-2 rounded-pill' alt='avatar' width='20px' height='20px' />
                    }
                    <span className="">{user.displayName}</span>
                  </button>
                  <ul className='dropdown-menu'>
                    <li className='dropdown-item mb-1' onClick={handlelogout}>Logout</li>
                    <li className='dropdown-item mb-1'>
                      <Link to={`/${user.displayName}/settings`} className="text-decoration-none text-black">
                        Settings
                      </Link>
                    </li>
                  </ul>
                </li> 
              </ul>
            : (
            <ul className="navbar-nav justify-content-lg-end">
              <li className="nav-item me-lg-4 mb-2 mb-lg-0">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item me-lg-4 mb-2 mb-lg-0">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </ul>)
          }

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
