import React from 'react'
import "./Hero.css"
import { Link } from 'react-scroll'
import Harendra from '../../assets/Harendra.png'
import Achievement from '../../Commons/Achievement'
const Hero = () => {
  return (
    <section id='hero'>
       <div className='wrapper info-container'>
        <div className="column">
          <h3 className='sub-title' data-aos="fade-right">
            Hey, I'm <span className="primary">Harendra Kumar</span>
          </h3>
          <h1 className='heading-1' data-aos="fade-up">
            A <span className="gradient-text">Visionary</span>  Tech Innovator
          </h1>
          <p className='muted' data-aos="fade-up" data-aos-delay="200">
            I'm a passionate engineering student who loves to bridges the gap between hardware and intelligence. I am currently pursuing my engineering at the University Institute of Engineering and Technology (UIET), Panjab University, Chandigarh.
          </p>
          <div className='flex-center buttons-wrapper'>
            <Link to='services' smooth={true} className='btn primary' data-aos="fade-left" data-aos-delay="1200" data-aos-offset="50">Learn more</Link>
            <Link to='contact' smooth={true} className='btn' data-aos="fade-left" data-aos-delay="1200" data-aos-offset="50">Get started</Link>
          </div>
        </div>
          <div className='column hero-image' data-aos="fade-left" data-aos-delay="200">
            <img src={Harendra} alt=''/>
          </div>
       </div>
       <div className="achievement-cluster">
        <div className="wrapper">
          <Achievement/>
        </div>
       </div>
    </section>
  )
}

export default Hero