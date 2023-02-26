import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
   <nav className="container">
    <div className="logo_wrapper">
        <img src="logo192.png" alt="" className="logo" />
    </div>
    <ul className="links_wrapper">
        <li>About</li>
        <li><a href="#skill_tab">Skills</a></li>
        <li>Experience</li>
        <li>Honor & Awards</li>
        <li>Certification</li>
    </ul>
    <button className='take_resume'>
        Resume
    </button>
   </nav>
  )
}

export default Nav