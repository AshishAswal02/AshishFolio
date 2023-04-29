import CV from '../../assets/cv.pdf'

const Actions = () => {
  return (
    <div className='actions'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact</a>
        </div>
  )
}

export default Actions