import React, { useState } from 'react'
// import './taskListItem.css';

const TasksInputText = ({className, placeholder, onKeyPress}) => {
    //
    return ( 
        <input type="text" className={className} placeholder={placeholder} onKeyPress={onKeyPress} />
    );
}
 
export default TasksInputText;