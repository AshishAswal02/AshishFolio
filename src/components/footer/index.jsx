import { useRef, useState } from 'react';
import './index.css'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'


const Footer = () => {
    return (
        <footer>
            <a href="#" className='scroll-to-top'>scroll to top</a>

            <ul className='jumpers'>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#folio">Folio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='socials'>
        <a href='https://www.linkedin.com/in/ashish-aswal-18b4351b3/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/AshishAswal02/' target='_blank'><BsGithub /></a>
        <a href='https://instagram.com/' target='_blank'><BsInstagram /></a>
    </div>

            <div className="copyright">
                <small>&copy; ASHISH SOFTWARES. All right reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
