import Me from '../../assets/naruto.jpg'
import { FaAward } from 'react-icons/fa'
import { BsBuildingFillCheck } from 'react-icons/bs'
import { MdGames } from 'react-icons/md'
import './index.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Me} alt="myImage" />
          </div>
        </div>
        <div className="about-content">
          <div className="cards">
            <article className="card">
              <FaAward className='about-icon' />
              <h5>My Experience</h5>
              <small>3+ years of experience </small>
            </article>
            <article className="card">
              <BsBuildingFillCheck className='about-icon' />
              <h5>Companies</h5>
              <small>Trantor</small>
              <small>Infosys  </small>
            </article>
            <article className="card">
              <MdGames className='about-icon' />
              <h5>Projects</h5>
              <small>6 projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, excepturi voluptatibus temporibus qui blanditiis ut aliquid molestiae suscipit soluta sint accusamus nemo pariatur, nam ea asperiores doloremque aperiam? Perferendis, dolores.</p>
          <a href="#contact" className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
