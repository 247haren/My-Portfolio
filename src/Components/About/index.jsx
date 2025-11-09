import React from 'react'
import "./About.css"
import { whyChooseMe } from '../../sources'
const About = () => {
  return (
    <section id='about'>
      <div className='wrapper'>
        <div className='section-header'>
          <h1 className='heading-1' data-aos="fade-left">
            <span className="gradient-text">About Me</span>
          </h1>
          <h4 className="sub-title muted" data-aos="fade-left">
              I am a Mechanical Engineering student at UIET, Panjab University, and the Convener of Jugaad Robotics Club of the tenure 2024-25, 
              led 60+ engineers. I bridge hardware and software through projects 
              in robotics, smart mobility, and automation. Passionate about innovation, I have hands-on experience in Web-Development, circuit design, 
              data analysis, and developing practical engineering solutions from concept to completion.
          </h4>
        </div>
        <div className="group">
          {
            whyChooseMe.map((list,index)=>(
              <div className="flex-center group-item" data-aos="fade-Right" key={index}>
                <div className="flex-center icon-wrapper">
                  {list.icon}
                </div>
                <h4 className='title'>{list.title}</h4>
              </div>
            ))
          }
        </div>
       </div>
    </section>
  )
}

export default About