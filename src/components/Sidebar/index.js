import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Nuevo-Logo2.png'
import LogoSubtitle from '../../assets/images/Nuevo-LogoSub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="Logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" /> 
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon   icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon   icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portafolio">
                <FontAwesomeIcon   icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blanck" rel='noreferrer' href='https://www.linkedin.com/in/nicolas-millar-8476161b9/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />   
                </a>
                <a target="_blank" rel='noreferrer' href='https://github.com/NicolasMillar'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4de" />
                </a>
            </li>
        </ul> 
    </div>
)

export default Sidebar