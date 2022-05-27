import React, { Component, useEffect, useState } from 'react'
import './ContentComponent.css';

const ContentComponent = ({select, setSelect, lists, setLists, tasks, setTasks}) => {
    const [filter, setFilter] = useState(-1)
    const [selectData, setSelectData] = useState([])
    //
    const handleRemove = (task) => (e) => {
        const newTasks = [...tasks]
        const findIndex = newTasks.findIndex(x => x[2] === task[2])
        newTasks.splice(findIndex, 1)
        setTasks(newTasks)
    }
    //
    const handleRadio = (task) => {
        const newTasks = [...tasks]
        newTasks[task[2]][1][0] = !newTasks[task[2]][1][0];
        setTasks(newTasks)
    }
    //
    const handleTaskEdit = (task) => (e) => {
        if (e.key === 'Enter') {
            const newTasks = [...tasks]
            newTasks[task[2]][1][1] = e.target.value;
            e.target.placeholder = ""
            e.target.value = ""
            setTasks(newTasks)
        }        
    }
    //
    const handleTasks = (tasks, number) => {
        switch(number) {
            case -1: return showAllTasks(tasks); 
            case 0: return showActiveTasks(tasks);
            case 1: return showCompletedTasks(tasks);
        }
    }
    //
    const createListItem = (task, index) => 
        <li key={index}>
            <div className='Char-Button' onClick={()=>handleRadio(task)}>[{task[1][0]
                ? "X"
                : " "}]
            </div>
            <input type='text' className='Fill Border-None' placeholder={task[1][1]} onKeyDown={handleTaskEdit(task)}/>
            <div className='Char-Button'>*</div>
            <div className='Char-Button' onClick={handleRemove(task)}>-</div>
        </li>
    //
    const showAllTasks = (task) => task
        .map((x, i) => createListItem(x, i))
    //
    const showActiveTasks = (task) => task
        .filter(x => !x[1][0])
        .map((x, i) => createListItem(x, i))
    //
    const showCompletedTasks = (task) => task
        .filter(x => x[1][0])
        .map((x, i) => createListItem(x, i))
    //
    const handleInput = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if(select === -1)
            {
                alert("not allowed in list *All*! Please choose another list in the nav")
            } else {
                const newTasks = [...tasks]
                newTasks.push([select, [false, e.target.value], tasks.length])
                setTasks(newTasks)
            }            
        }        
    }
    //    
    const showSelected = (tasks, select) => select === -1
        ? tasks
        : tasks.filter(x => x[0] === select)
    //
    return (
      <div className='ContentComponent'>
            <input type="text" className='Margin-Bottom Max-Width Border-None Border-Bottom' placeholder='Create New Task' onKeyDown={handleInput}/>
            <div className='Sort-Buttons Max-Width'>
                <div className='Text-Button' onClick={() => setFilter(-1)}>All</div>
                <div className='Text-Button' onClick={() => setFilter(0)}>Active</div>
                <div className='Text-Button' onClick={() => setFilter(1)}>Completed</div>
            </div>
        <div className='Scroll Border-Bottom'>
            <ul className='Max-Width'>
                {
                    handleTasks(showSelected(tasks, select), filter)
                }
            </ul>
        </div>
        <div className='Footer'>
            <div className='Text-Button'>Complete All</div>
            <div className='Text-Button'>Activate All</div>
            <div className='Text-Button Button-Danger'>Remove All</div>
        </div>          
      </div>
    )
}

export default ContentComponent