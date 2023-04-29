import './index.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact-container">
        <div className="contacts">
          <article className="contact">
            <MdOutlineEmail className='icon'/>
            <h4>Email</h4>
            <h5>121ashishaswal121@gmail.com</h5>
            <a href="mailto:121ashishaswal121@gmail.com" target='_blank'>Mail</a>
          </article>
          <article className="contact">
            <RiMessengerLine  className='icon'/>
            <h4>Facebook</h4>
            <h5>Connect on fb</h5>
            <a href="https://m.me/ashish.aswal.54772/" target='_blank'>Facebook</a>
          </article>
          <article className="contact">
            <BsWhatsapp className='icon' />
            <h4>Whatsapp</h4>
            <h5>+918126751606</h5>
            <a href="https://api.whatsapp.com/send?phone=+918126751606" target='_blank'>Mail</a>
          </article>
        </div>
        <form className="form" action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="message" rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact

