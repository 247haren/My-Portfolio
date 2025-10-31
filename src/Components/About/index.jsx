import React from 'react'
import "./About.css"
import { whyChooseMe } from '../../sources'
const About = () => {
  return (
    <section id='about'>
      <div className='wrapper'>
        <div className='section-header'>
          <h1 className='heading-1'>
            <span className="gradient-text">About Me</span>
          </h1>
          <h4 className="subtitle muted">
              I began my journey in development and problem-solving on August 11, 2023,
               focusing on frontend development with JavaScript, ReactJS, HTML, and CSS.
                Passionate about learning and innovation, I’m dedicated to building user-
                friendly applications and enhancing my skills in data structures and 
                                            algorithms.
          </h4>
        </div>
        <div className="group">
          {
            whyChooseMe.map((list,index)=>(
              <div className="flex-center group-item" key={index}>
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