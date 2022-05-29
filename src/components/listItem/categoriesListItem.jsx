import React, { useState } from 'react'
import './categoriesListItem.css';

const CategoriesListItem = ({id, text, text2, onClick, selectedId}) => {
    //
    const renderText2 = (text) => text === undefined
        ? null
        : <p>{text}</p>
    //
    return ( 
        <li key={id} className={`CategoriesListItem ${id === selectedId ? "Active" : ""}`}
           onClick={onClick}>

            <p>{text}</p>

            {renderText2(text2)}

        </li>
    );
}
 
export default CategoriesListItem;