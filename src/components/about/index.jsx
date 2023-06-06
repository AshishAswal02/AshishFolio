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
              <small>Trantor</small>&nbsp;
              <small>Infosys</small>
            </article>
            <article className="card">
              <MdGames className='about-icon' />
              <h5>Projects</h5>
              <small>6 projects</small>
            </article>
          </div>

          <div class="desc">
            <p> I have 3.5 years of experience in developing web applications with React, NextJs, Context API, Redux, JS and other react evnironment libraries like  MUI, Redux, TS, Jest, GIT, Jenkins.
            </p>
            <p>	I am committed to delivering high-quality code and ensuring that my applications are fast, responsive, and accessible to all users.
            </p>
          </div>
          <a href="#contact" className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
