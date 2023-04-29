import './index.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience">
        <div className="experience-frontend">
          <div className="content">
            <article className="experience-details">
              <div>
                <BsPatchCheckFill className='experience-details-icon' />
                <h4>Next JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <BsPatchCheckFill className='experience-details-icon' />
                <h4>React JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <BsPatchCheckFill className='experience-details-icon' />
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <BsPatchCheckFill className='experience-details-icon' />
                <h4>HTML5/CSS3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <BsPatchCheckFill className='experience-details-icon' />
                <h4>Material UI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <BsPatchCheckFill className='experience-details-icon' />
                <h4>Context API</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <BsPatchCheckFill className='experience-details-icon' />
                <h4>Redux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
