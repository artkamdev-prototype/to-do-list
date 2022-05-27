import React, { Component, useState } from 'react'
import './ToDoList.css';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';
import ContentComponent from './ContentComponent';

const ToDoList = () => {  
    const [select, setSelect] = useState(0)
    //
    const [lists, setLists] = useState([        
        "Business",
        "WBS-Fullstack",
        "2022-05-27"
    ])
    //
    const [tasks, setTasks] = useState([
        [0, [false, "Step-1: Copy&Paste Facebook..."], 0],
        [0, [false, "Step-2: Name it to FacebookCool..."], 1],
        [0, [false, "Step-3: Get rich..."], 2],
        [1, [true, "Be awesome"], 3],
        [1, [true, "Be fantastic"], 4],
        [1, [true, "Be like group-2"], 5],
    ])
    //
    return (
        <div className='ToDoList'>
            <HeaderComponent select={select} lists={lists} tasks={tasks}/>
            <main>
                <NavComponent select={select} setSelect={setSelect} lists={lists} setLists={setLists} tasks={tasks} setTasks={setTasks}/>
                <ContentComponent select={select} setSelect={setSelect} lists={lists} setLists={setLists} tasks={tasks} setTasks={setTasks}/>
            </main>
        </div>
    );
}

export default ToDoList