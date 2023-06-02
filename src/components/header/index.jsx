import React from 'react'
import Actions from './Actions'
import Naruto from '../../assets/n.png'
import Socials from './Socials'
import './index.css'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>hello I'm</h5>
        <h1>Ashish</h1>
        <h5 className="text-light">full stack developer</h5>
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
