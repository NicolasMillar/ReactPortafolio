import './index.scss'
import AnimatedLeters from '../AnimatedLeters'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import {
  faLaravel,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    
    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLeters letterClass={letterClass} strArray={['A', 'b','o','u','t',' ', 'm','e']} idx={15} />
                    </h1>
                    <p>
                        Computer Engineer with professional experience in Java, PHP, Laravel and relational database engines such as MySQL and PostgreSQL.
                        Good knowledge in HTML, CSS and JavaScript. Recently graduated in Computer Engineering from the UBB with all the competencies of 
                        the career as orientation towards collaborative work, organizational management and a permanent commitment to learning. 
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faLaravel} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
        
    )
}

export default About