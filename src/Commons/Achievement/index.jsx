import React,{useState,useEffect} from 'react'
import './Achievement.css'
import Odometer from "react-odometerjs"
import { clients } from '../../sources'

const Achievement = () => {
    const [experience,setExperience] = useState(0)
    const [clients,setClients] = useState(0);
    const [projects,setProjects] = useState(0);

    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setClients(2);
            setExperience(1);
            setProjects(10);
        },3000)
        return () => clearTimeout(timeOutId);
    },[])
  return (
    <div className='achievement-container'>
        <div className="card">
            <div className="flex-center">
                <Odometer value={experience} className='title'/>
                <h1 className='title'>+</h1>
            </div>
            <p className='muted name'>Years in leadership</p>
        </div>

        <div className="card">
            <div className="flex-center">
                <Odometer value={clients} className='title'/>
                <h1 className='title'>+</h1>
            </div>
            <p className='muted name'>Years in Tech</p>
        </div>

        <div className="card">
            <div className="flex-center">
                <Odometer value={projects} className='title'/>
                <h1 className='title'>+</h1>
            </div>
            <p className='muted name'>Completed Projects</p>
        </div>
    </div>
  )
}

export default Achievement