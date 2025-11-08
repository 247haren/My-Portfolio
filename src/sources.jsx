import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";
import { IoMdAnalytics} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaInstagram, FaXTwitter, FaYoutube,FaLaptopCode,FaLinkedin,FaGithub,FaPython} from "react-icons/fa6";
import { FaFacebookSquare,FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from 'react-icons/tfi'
import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb,SiArduino} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import Summer from './assets/Summer.png';
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import Drive from './assets/Drive.jpg';
import { GiSolderingIron } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";
import Arm from './assets/Arm.jpg'
import { BsBadge3D } from "react-icons/bs";
import { MdSensors } from "react-icons/md";
import { TbCircuitMotor } from "react-icons/tb";
import Charger from './assets/Charger.jpg'
import LFR from './assets/LFR.jpg'
import SOCCER from './assets/SOCCER.jpg'
import KWalia from './assets/KWalia.jpg'

export const tabs = [
    {name:"About Me",id:'about'},
    {name:"Skill",id:'skill'},
    {name:"Services",id:'services'},
    {name:"Projects",id:'projects'},
    {name:"Testimonials",id:'testimonials'},
]

export const whyChooseMe = [
  {
    title:"Team Leadership",
    icon:<GrUserExpert/>,
    link:"",
  },
  {
    title:"Innovative",
    icon:<IoMdAnalytics/>,
    link:"",
  },
  {
    title:"Technologically Smart",
    icon:<MdOutlineSupportAgent/>,
    link:"",
  },
  {
    title:"Robotics",
    icon:<FaRobot/>,
    link:"",
  },
]
export const services = [
  {
    name:"UI/UX Design",
    icon:<FaPaintBrush/>,
    description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
    voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
    eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
  },
  {
    name:"Web Development",
    icon:<FaLaptopCode/>,
    description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
    voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
    eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
  },
  {
    name:"Content Creation",
    icon:<TfiWrite/>,
    description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
    voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
    eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
  },
  
]


export const skills = [
  {
      title:"Programming Languages",
      data:[
          {
              skill:"C",
              level:"Experienced",
          },
          {
              skill:"Embedded C",
              level:"Experienced",
          },
          {
              skill:"Python",
              level:"Intermediate",
          },
          {
              skill:"Java",
              level:"Experienced",
          },
          {
              skill:"JavaScript",
              level:"Experienced",
          },
          {
              skill:"HTML",
              level:"Experienced",
          },
          {
              skill:"CSS",
              level:"Experienced",
          },
      ]
  },
  {
      title:"Frameworks & Libraries",
      data:[
          {
              skill:"React",
              level:"Experienced",
          },
          {
              skill:"Node.js",
              level:"Experienced",
          },
          {
              skill:"Express",
              level:"Intermediate",
          },
          {
              skill:"Tailwind CSS",
              level:"Experienced",
          },
          {
              skill:"Matplotlib",
              level:"Experienced",
          },
          // {
          //     skill:"",
          //     level:"Experienced",
          // },
          // {
          //     skill:"",
          //     level:"Experienced",
          // },
      ]
  },
  {
      title:"Development Tools & Platforms",
      data:[
          {
              skill:"Git & GitHub",
              level:"Experienced",
          },
          {
              skill:"Arduino IDE",
              level:"Experienced",
          },
          {
              skill:"Linux",
              level:"Experienced",
          },
          {
              skill:"Microsoft Excel",
              level:"Experienced",
          },
      ]
  },
  {
      title:"Soft Skills",
      data:[
          {
              skill:"Team Management",
              // level:"Experienced",
          },
          {
              skill:"Strategic Thinking",
              // level:"Experienced",
          },
          {
              skill:"Continuous Learning",
              // level:"Experienced",
          },
          {
              skill:"Time Optimization",
              // level:"Experienced",
          },
          {
              skill:"Leadership",
              // level:"Experienced",
          },
          {
              skill:"Collaboration",
              // level:"Experienced",
          },
          
          
          
          {
              skill:"Documentation",
              // level:"Experienced",
          },
      ]
  },
   {
      title:"3D Printing & CAD",
      data:[
          {
              skill:"3D Printing",
              level:"Experienced",
          },
          {
              skill:"AutoCAD",
              level:"Experienced",
          },
          {
              skill:"Slicing (Creality & Prusa)",
              level:"Intermediate",
          },
          // {
          //     skill:"Java",
          //     level:"Experienced",
          // },
          // {
          //     skill:"JavaScript",
          //     level:"Experienced",
          // },
          // {
          //     skill:"HTML",
          //     level:"Experienced",
          // },
          // {
          //     skill:"CSS",
          //     level:"Experienced",
          // },
      ]
  },
   {
      title:"Database",
      data:[
          {
              skill:"MySQL",
              level:"Experienced",
          },
          {
              skill:"SQL",
              level:"Experienced",
          },
          // {
          //     skill:"Python",
          //     level:"Intermediate",
          // },
          // {
          //     skill:"Java",
          //     level:"Experienced",
          // },
          // {
          //     skill:"JavaScript",
          //     level:"Experienced",
          // },
          // {
          //     skill:"HTML",
          //     level:"Experienced",
          // },
          // {
          //     skill:"CSS",
          //     level:"Experienced",
          // },
      ]
  },
]


export const projects = [
  { 
    id:1,
    title: 'Drive Cycle Development for Bhagalpur Road Conditions',
    image: Summer,
    category:"AI/ML",
    description: `Developed drive cycles for Bhagalpur road conditions
     during summer internship at IIIT Bhagalpur,
     focusing on smart mobility solutions and sustainable transportation analysis.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"Python",
        icon: <FaPython/>,
        iconColor:"green",
      },
      {
        name:"MS-Excel",
        icon: <PiMicrosoftExcelLogoFill/>,
        iconColor:"green",
      },
      {
        name:"Arduino IDE",
        icon: <SiArduino/>,
        iconColor:"green",
      },
      {
        name:"Embedded C",
        icon: <GrLanguage/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:2,
    title: 'Driver Sleep Detection System',
    image: Drive,
    category:"AI/ML",
    description:`Created an innovative system to detect driver drowsiness using Python libraries,
     enhancing road safety through real-time monitoring and alert systems.`,
    demoLink: "https://www.linkedin.com/posts/harendra-kumar-890127257_engineering-innovation-roadsafety-activity-7229561453316349952-z4QV",
    stack:[
      {
        name:"Python",
        icon: <FaPython/>,
        iconColor:"green",
      },
      {
        name:"Arduino IDE",
        icon: <SiArduino/>,
        iconColor:"green",
      },
      {
        name:"Soldering",
        icon: <GiSolderingIron/>,
        iconColor:"green",
      },
      {
        name:"Embedded C",
        icon: <GrLanguage/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:3,
    title: 'Robotic Arm',
    image: Arm,

    category:"Robotics",
    description: `Designed and engineered fully functional robotic arms that integrate advanced hardware systems with intelligent software control.`,
    demoLink: "https://youtube.com/shorts/rav34KRBzOE?si=iwYD2M_whT___Ut4",
    stack:[
      {
        name:"Arduino IDE",
        icon: <SiArduino/>,
        iconColor:"green",
      },
      {
        name:"Embedded C",
        icon: <GrLanguage/>,
        iconColor:"limegreen",
      },
      {
        name:"Servo Motors",
        icon: <TbCircuitMotor/>,
        iconColor:"green",
      },
      {
        name:"3D Printing",
        icon: <BsBadge3D/>,
        iconColor:"limegreen",
      },
      {
        name:"Sensor Integration",
        icon: <MdSensors/>,
        iconColor:"green",
      },
    ]
  },
  {
    id:4,
    title: 'Line Following Robot',
    image: LFR,
    category:"Robotics",
    description: `A Line Following Robot is an autonomous robot that is designed to follow a 
pre-defined path or track, typically a black line or tape on a white surface. The robot 
uses various sensors to detect the line and adjusts its movements accordingly to stay 
on course.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"Arduino IDE",
        icon: <SiArduino/>,
        iconColor:"green",
      },
      {
        name:"Embedded C",
        icon: <GrLanguage/>,
        iconColor:"limegreen",
      },
      {
        name:"Motor Driver",
        icon: <TbCircuitMotor/>,
        iconColor:"green",
      },
      {
        name:"3D Printing",
        icon: <BsBadge3D/>,
        iconColor:"limegreen",
      },
      {
        name:"Sensor Integration",
        icon: <MdSensors/>,
        iconColor:"green",
      },
    ]
  },
  {
    id:5,
    title: 'Wireless Charger',
    image: Charger,
    category:"Embedded",
    description: `Designed and developed an efficient wireless charging station for electric vehicles using resonant inductive
     coupling technology. This system enables convenient, cable-free charging through advanced power electronics and circuit design,
      demonstrating innovative solutions for sustainable energy transfer in modern transportation.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"Integration",
        icon: <MdSensors/>,
        iconColor:"green",
      },
      {
        name:"Soldering",
        icon: <GiSolderingIron/>,
        iconColor:"green",
      },
    ]
  },
  {
    id:6,
    title: 'RoboSoccer',
    image: SOCCER,
    category:"Embedded",
    description: `A manually operated soccer robot designed for competitive robotics event.
     Built for agility and control, it combines robust mechanics with responsive electronics, 
     allowing real-time human-guided gameplay through wired communication.`,
      demoLink: "https://youtube.com/shorts/lpTznWLw6iw?feature=share",
    stack:[
      {
        name:"Sensor Integration",
        icon: <MdSensors/>,
        iconColor:"green",
      },
      {
        name:"Soldering",
        icon: <GiSolderingIron/>,
        iconColor:"green",
      },
    ]
  },
]

export const clients = [
  {
    image:client1,
    name:'Vikash Kumar',
    designation: 'SDE @Deloitte ',
    review:` Ur presentation skill is quite good...Keep going 😊 `
  },
  {
    image:KWalia,
    name:'Kartikeya Walia',
    designation:'Senior Lecturer @Nottingham Trent University, England, United Kingdom',
    review:`Proud of you guys. Great to see Jugaad come such a long way. Next time I am in India,
     I will make sure to visit and see some of the amazing work you guys have been doing.`
  },
  // {
  //   image:client3,
  //   name:'Gloria Chiwendu',
  //   review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
  //           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  //          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
  //          veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
  //          exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  // },
  // {
  //   image:client4,
  //   name:'Precious Stone',
  //   review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
  //           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  //          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  // },
  // {
  //   image:client5,
  //   name:'Ndubisi John',
  //   review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
  //           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  //          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  // },

];

export const contactOptions = [
  {
    title:"Email",
    value:"247haren@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    title:"Phone Number",
    value:"+91 9771714271",
    icon:<IoCallOutline/>,
  },
  {
    title:"Address",
    value:"UIET, Panjab University, Sector-25",
    icon:<IoLocationOutline/>,
  },
]

export const socialHandles = [
    {
      name:"Instagram",
      icon:<FaInstagram />,
      link:"https://www.instagram.com/harendrakumar522/",
    },
    {
      name:"LinkedIn",
      icon:<FaLinkedin />,
      link:"https://www.linkedin.com/in/harendra-kumar-890127257/",
    },
    {
      name:"Github",
      icon:<FaGithub/>,
      link:"https://github.com/247haren",
    },
    {
      name:"Youtube",
      icon:<FaYoutube/>,
      link:"https://www.youtube.com/@harendraprydarshi",
    },
];

export const footer = [
  {
    title:"Explore",
    routes:[
      {name:"About Me",id:'about'},
      {name:"Skill",id:'skill'},
    ]
  },
  {
      title:"Trusted",
      routes:[
        {name:"Services",id:'services'},
        {name:"Projects",id:'projects'},
        {name:"Testimonials",id:'testimonials'},
      ]
    },
  {
      title:"Others",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
]

    