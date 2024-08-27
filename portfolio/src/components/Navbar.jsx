import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to='/' className='logo'>My Portfolio</Link>
        <ul class="nav-links">
          <li><Link className={location.pathname === '/' ? 'link-active' : 'link-inactive'} to="/" >Home</Link></li>
          <li><Link className={location.pathname === '/About' ? 'link-active' : 'link-inactive'} to="/About">About</Link></li>
          <li><Link className={location.pathname === '/Resume' ? 'link-active' : 'link-inactive'} to="/Resume">Resume</Link></li>
          <li><Link className={location.pathname === '/Projects' ? 'link-active' : 'link-inactive'} to="/Projects">Projects</Link></li>
          <li><Link className={location.pathname === '/ContactMe' ? 'link-active' : 'link-inactive'} to="/ContactMe">Contact Me</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
