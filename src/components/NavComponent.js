import React, { Component, useState } from 'react'
import './NavComponent.css';

const NavComponent = ({select, setSelect, lists, setLists, tasks, setTasks}) => {
    //
    const handleSelect = (index) => (e) => {
        setSelect(index)
    }
    const createListItem = (x, index, number) =>
        <li key={index} onClick={handleSelect(index)} style={{backgroundColor: index === select ? "#999" : "#0000"}}>
            <p>{x}</p>
            <p>{number}</p>
        </li>
    //
    const calculateNumber = (tasks, index) => tasks
        .filter(x => x[0] === index)
        .filter(x => !x[1][0]).length
    //
    const showAll = (tasks) => createListItem("All", -1, tasks.filter(x => !x[1][0]).length) 
    //
    const showList = (lists, tasks) => lists
        .map((x,i) => createListItem(x, i, calculateNumber(tasks, i)))
    //
    return (
      <div className='NavComponent'>
          <div className='Scroll Border-Right Border-Bottom'>
            <ul>
                {
                    showAll(tasks)
                }

                {
                    showList(lists, tasks)
                }
            </ul>
          </div>
          <div className='Text-Button Border-Right'>Create New List</div>
      </div>
    )
}

export default NavComponent