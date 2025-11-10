import React, { useState } from 'react';
import './JUGAAD.css';
import JUGAAD1 from '../../assets/JUGAAD1.jpg'
import JUGAAD_video_thumbnail from '../../assets/JUGAAD_video_thumbnail.jpg'
import JUGAAD2024 from '../../assets/JUGAAD2024.jpg'
import Semiconductor from '../../assets/Semiconductor.jpg'
import Marine from '../../assets/Marine.jpg'
import OrientationThumbnail from '../../assets/OrientationThumbnail.jpg'
import YouTube from 'react-youtube';

const JUGAAD = () => {
  const [activeMedia, setActiveMedia] = useState(0);

  const mediaItems = [
    {
      type: 'image',
      src: JUGAAD1,
      alt: 'Jugaad Robotics Team',
      caption: 'Team Jugaad Robotics 2025-26'
    },
    {
      type: 'image', 
      src: JUGAAD2024,
      alt: 'Jugaad Robotics Team',
      caption: 'Team Jugaad Robotics 2024-25'
    },
    {
      type: 'youtube',
      videoId: 'n3V0qmjicnQ',
      poster: OrientationThumbnail,
      caption: 'Jugaad Orientation 25'
    },
    {
      type: 'image',
      src: Semiconductor,
      alt: 'Semiconductor Workshop',
      caption: 'Semiconductor Workshop'
    },
    {
      type: 'image',
      src: Marine,
      alt: 'Marine Life at Jugaad Robotics',
      caption: 'Marine Life 3D Printed at JUGAAD'
    },
    {
      type: 'youtube',
      videoId: 'Dme34QkhNNM',
      poster: JUGAAD_video_thumbnail,
      caption: 'Jugaad Orientation 25'
    },
  ];

  const achievements = [
    {
      icon: '👥',
      number: '60+',
      title: 'Engineers Managed',
      description: 'Led and mentored a team of technical innovators'
    },
    {
      icon: '🚀',
      number: '10+',
      title: 'Projects Completed',
      description: 'From LFR to Industry 4.0 solutions'
    },
    {
      icon: '🎯',
      number: '100+',
      title: 'Participants Engaged',
      description: 'In workshops and technical events'
    },
    {
      icon: '⭐',
      number: '2',
      title: 'Years Leadership',
      description: 'Technical Team to Convener'
    }
  ];

  const projects = [
    'LFR (Line Follower Robot)',
    'PathFinder Navigation System',
    'RoboSoccer Autonomous Robot',
    'Robotic Arm with 6DOF',
    'Self-Balancing Bot',
    'Website Development',
    'Image Processing Solutions'
  ];
  const YouTubePlayer = ({ videoId, poster }) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="youtube-container">
      <YouTube 
        videoId={videoId} 
        opts={opts}
        className="youtube-player"
      />
    </div>
  );
};
  return (
    <section id="experience" className="life-at-jugaad">
      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <div className="breadcrumb">
            <span>Experience</span>
            <span className="separator">/</span>
            <span className="current" gradient-text>Life at JUGAAD</span>
          </div>
          <h1 className="main-title" data-aos="fade-left">
            Life at <span className="highlight">JUGAAD Robotics</span>
          </h1>
          <p className="subtitle" data-aos-once="true">
            Leading innovation and fostering technical excellence at UIET's premier robotics club
          </p>
        </div>

        <div className="content-grid">
          {/* Left Column - Timeline & Details */}
          <div className="details-column">
            {/* Timeline */}
            <div className="timeline-section" data-aos="fade-right">
              <h3 className="section-title">My Journey</h3>
              <div className="timeline">
                <div className="timeline-item current">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">Nov 2025 - Present</span>
                    <h4 className="timeline-role">Advisory</h4>
                    <p className="timeline-description">
                      I guide and mentor a dynamic team of robotics enthusiasts, helping them conceptualize, design, and execute innovative robotics solutions. I provide technical insights, strategic direction, and leadership support to ensure smooth project execution. My role focuses on fostering creativity, teamwork, and problem-solving while aligning projects with emerging technologies and real-world applications.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">Oct 2024 - Oct 2025</span>
                    <h4 className="timeline-role">Convener</h4>
                    <p className="timeline-description">
                      Leading a dynamic team of innovators, fostering creativity and collaboration 
                      to push the boundaries of robotics projects.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">Feb 2024 - Oct 2024</span>
                    <h4 className="timeline-role">Technical Team Member</h4>
                    <p className="timeline-description">
                      Contributed to innovative technology projects, developed voltage regulators 
                      and rectifiers, enhancing skills in electronics and circuit design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="achievements-section" data-aos="fade-right">
              <h3 className="section-title">Key Achievements</h3>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-content">
                      <div className="achievement-number">{achievement.number}</div>
                      <div className="achievement-title">{achievement.title}</div>
                      <div className="achievement-description">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="projects-section" data-aos="fade-right">
              <h3 className="section-title">Projects Supervised</h3>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div key={index} className="project-tag">
                    {project}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Media */}
          <div className="media-column" data-aos="fade-left">
            {/* Main Media Display */}
            <div className="main-media">
              <div className="media-container">
                {mediaItems[activeMedia].type === 'image' ? (
                  <img 
                    src={mediaItems[activeMedia].src} 
                    alt={mediaItems[activeMedia].alt}
                    className="media-display"
                  />
                ) : mediaItems[activeMedia].type === 'youtube' ? (
                  <YouTubePlayer 
                    videoId={mediaItems[activeMedia].videoId}
                    poster={mediaItems[activeMedia].poster}
                  />
                ) : (
                  <video 
                    src={mediaItems[activeMedia].src}
                    poster={mediaItems[activeMedia].poster}
                    className="media-display"
                    controls
                  />
                )}
                <div className="media-caption">
                  {mediaItems[activeMedia].caption}
                </div>
              </div>
            </div>

            {/* Media Thumbnails */}
            <div className="media-thumbnails">
              {mediaItems.map((item, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${activeMedia === index ? 'active' : ''}`}
                  onClick={() => setActiveMedia(index)}
                >
                  {item.type === 'image' ? (
                    <img src={item.src} alt={item.alt} />
                  ) : (
                    <div className="video-thumbnail">
                      <img src={item.poster} alt={item.caption} />
                      <div className="play-icon">▶</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Skills & Technologies */}
            <div className="skills-section" data-aos="fade-left">
              <h3 className="section-title">Skills & Technologies</h3>
              <div className="skills-tags">
                <span className="skill-tag">Team Management</span>
                <span className="skill-tag">Robotics</span>
                <span className="skill-tag">Embedded Systems</span>
                <span className="skill-tag">Microcontrollers</span>
                <span className="skill-tag">Circuit Design</span>
                <span className="skill-tag">Sensors</span>
                <span className="skill-tag">Prototyping</span>
                <span className="skill-tag">Workshop Organization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JUGAAD;