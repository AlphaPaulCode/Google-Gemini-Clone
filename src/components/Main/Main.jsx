import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

export const Main = () => {
  return (
    <div className='main'>
    <div className='nav'>
    <p>Gemini</p>
    <img src={assets.paul} alt=''/>
    </div>
    <div className='main-container'>
    <div className='greet'>
    <p><span>Hello, Paul</span></p>
    <p>How can I help you today?</p>
    </div>
    <div className='cards'>
    <div className='card'>
    <p>Suggest Beautiful places to see an upcoming road trip</p>
    <img src= {assets.compass_icon} alt=''/>
    </div>
    <div className='card'>
    <p>Briefly Summarize this concept: Rural Settlement</p>
    <img src= {assets.bulb_icon} alt=''/>
    </div>
    <div className='card'>
    <p>Brainstorm team bonding activities for our work retreat</p>
    <img src= {assets.message_icon} alt=''/>
    </div>
    <div className='card'>
    <p>Improve the readability of the following code</p>
    <img src= {assets.code_icon} alt=''/>
    </div>
    </div>
    </div>
    </div>
  )
}
