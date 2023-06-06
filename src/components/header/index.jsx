import React from 'react'
import Actions from './Actions'
import Naruto from '../../assets/n.png'
import Socials from './Socials'
import './index.css'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h4>Hello I'm</h4>
        <h1>Ashish</h1>
        <h4 className="text-light">Front End Developer</h4>
        <Actions />
        <div className='my-image'>
        <img src={Naruto} alt='img' />
        </div>
        <Socials /> 
      </div>
      </header>
  )
}

export default Header
