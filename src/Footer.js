import React from 'react';
import './Footer.css';
import linkedin from './assets/images/linkedin.png'
import git from './assets/images/git.png'
import gmail from './assets/images/gmail.png'

function Footer() {
    return (
        <footer id='contact'>
            <a href="https://github.com/AndresDelgado1" className='socials'><img src={git} alt='GitHub' className='soclog' /></a>
            <a href="https://www.linkedin.com/in/andres-delgado-7b6484197/" className='socials'><img src={linkedin} alt='LinkedIn' height={100} className='soclog' /></a>
            <a href="https://andresdelgado1.github.io/" className='socials'><img src={gmail} alt='Gmail' className='soclog' /></a>
        </footer>
    )
}

export default Footer;