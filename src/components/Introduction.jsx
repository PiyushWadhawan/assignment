import React from 'react'
import './Introduction.css'
import Dropdown from './Dropdown'
import { useState } from 'react'

function Introduction() {

  const [message, activate] = useState(false)

  const buttons = ["Check in", "Check out", "Count"]
  let count = 0;

  return (
    <div className='intro'>
      <div className='tint'>
        <div className="dropdown">
          {buttons.map(item => <Dropdown name={item} count={count++} key={count}/>)}
          <div className="availability-btn" onClick={() => activate(!message)}>
            Check Availability
          </div>
        </div>
        {message? 
        (<div className="message" onClick={() => activate(!message)}>
          <img className="message-img" src="https://media3.giphy.com/media/J2vqNbXJkGrx6/giphy.gif" alt="" />
          YES, I am available for this Internship!
        </div>): ""}
      </div>
    </div>
  )
}

export default Introduction
