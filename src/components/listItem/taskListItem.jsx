import React, { useState } from 'react'
import Button from '../button/button';
import TasksInputText from '../inputText/tasksInputText';
import './taskListItem.css';

const TaskListItem = ({id, text, onClickActive, onClickFavorite, onClickDelete, isActive, isFavorite, onKeyPress}) => {
    return ( 
        <li className='TaskListItem' id={id}>

            <Button 
            text={`[${isActive ? "_" : "#"}]`} 
            onClick={() => onClickActive(id)}/>


            <TasksInputText 
            className="Text Border-None" 
            placeholder={text}
            onKeyPress={onKeyPress(id)} />

            <Button 
            text={`${isFavorite ? "*" : "."}`} 
            onClick={() => onClickFavorite(id)} />

            <Button className='Button-Danger'
            text="x" onClick={() => onClickDelete(id)}/>

        </li>
    );
}
 
export default TaskListItem;