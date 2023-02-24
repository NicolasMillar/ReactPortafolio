import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLeters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
  
    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm('default_service', 'template_ljjuq6c', form.current, 'tr8gVjvAbVahzGzor')
        .then(
          () => {
            Swal.fire({
              title: 'Message successfully sent!',
              text: 'Thank you for contacting me, you will receive an answer as soon as possible.',
              icon: 'success',
              confirmButton: '<FontAwesomeIcon icon={faThumbsUp} /> Great!',
            })
          },
          () => {
            Swal.alert({
              title: 'Failed to send the message!',
              text: 'sorry an error occurred, please try again.',
              icon: 'error'
            })
          }
        )
    }
  
    return (
      <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
                I'm a Software Engineer. I'm passionate about building software that improves people's lives.
            </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text"  name="from_name" id="from_name" required />
                  </li>
                  <li className="half">
                    <input placeholder="Email" type="email" name="email_id" id="email_id" required />
                  </li>
                  <li>
                    <input placeholder="Subject" type="text" name="subject" required />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
  }
  
  export default Contact