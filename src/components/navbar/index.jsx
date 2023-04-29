import './index.css'
import { BsHouseDoor } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { ImBooks } from 'react-icons/im'
import { TbMessage } from 'react-icons/tb'
import { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState('');

  const handleNavClick = (clickedNav) => {
    setActive(clickedNav);
  }

  return (
    <nav>
      <a
        href="#"
        title='home'
        className={`${active === '' ? 'active' : ''}`}
        onClick={() => handleNavClick('')}
        >
          <BsHouseDoor />
        </a>
      <a 
      href="#about"
      className={`${active === 'about' ? 'active' : ''}`}
        onClick={() => handleNavClick('about')}
        ><AiOutlineUser /></a>
      <a
      href="#experience"
      className={`${active === 'experience' ? 'active' : ''}`}
        onClick={() => handleNavClick('experience')}
        ><ImBooks /></a>
      <a href="#contact"
      className={`${active === 'contact' ? 'active' : ''}`}
      onClick={() => handleNavClick('contact')}
      ><TbMessage /></a>
    </nav>
  )
}

export default Navbar
