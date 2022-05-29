import React, { useState } from 'react'
import './buttonRow.css';
//
const ButtonRow = ({className, buttons, selectedId}) => {
    //
    const renderButton = (buttons, selectedId) => buttons === undefined
        ? null
        : buttons
            .map(x => 
                <button
                    className={`ButtonRow ${x.id === selectedId ? "Active" : ""}`}
                    id={x.id} 
                    key={x.id} 
                    onClick={x.onClick}>
                    {x.text}
                </button>)
    //
    return (
        <div className={className}>

            {
                renderButton(buttons, selectedId)
            }

        </div>
    );
}

export default ButtonRow;