import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Nuevo-Logo.png';
import AnimatedLeters from '../AnimatedLeters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders'

const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray=['i','c','o','l','a','s', ' ', 'M', 'i','l','l','a','r','.']
    const jobArray=['I','n','f','o','r','m','a','t','i','c', ' ', 'E','n','g','i','n','e','e','r','i','n','g', '.']

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 5000)
      }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLeters letterClass={letterClass} strArray={nameArray} idx={15}/>
                        <br />
                        <AnimatedLeters letterClass={letterClass} strArray={jobArray} idx={22}/>
                    </h1>              
                    <h2>Frontend Developed and Backend Developer</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type="pacman" />
        </>
        
    )
}

export default Home