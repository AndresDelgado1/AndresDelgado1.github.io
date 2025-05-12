import React from 'react';
import './Navbar.css';
import logo from './assets/images/logo.png';

function Navbar() {
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
            <nav>
                <ul className="nav-links">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>
            </nav>
            <button type="button"><a href='#contact'>Contact</a></button>
        </header>
    )
}

export default Navbar;