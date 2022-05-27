import React, { Component, useState } from 'react'
import './HeaderComponent.css';

const HeaderComponent = ({select, lists, tasks}) => {
  const [debugMode, setDebugMode] = useState(false)
  //
  const showData = () => {
    if(!debugMode) return;
    
    return (
      <div>
        <div className='Mono'>{"select: " + JSON.stringify(select)}</div>
          <br />
          <div className='Mono'>{"lists: " + JSON.stringify(lists)}</div>
          <br />
          <div className='Mono'>{"tasks: " + JSON.stringify(tasks)}</div>
          <br />
      </div>
    )
  }
  //
  const toggle = () => {    
    setDebugMode(!debugMode)
  }
  //
  return (
    <div className='HeaderComponent'>
        {/* Toggle Button for Design */}
        <button onClick={toggle}>_</button>

        {showData()}
    </div>
  )
}
export default HeaderComponent