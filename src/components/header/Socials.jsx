import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className="header-socials">
        <a href='https://www.linkedin.com/in/ashish-aswal-18b4351b3/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/AshishAswal02/' target='_blank'><BsGithub /></a>
        <a href='https://instagram.com/' target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default Socials