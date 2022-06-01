import React, { useState } from 'react'
import './header.css';
//
const Header = ({className, toggleTheme, themeName}) => {
    return ( 
        <div className={'Header ' + className}>
             <button className='Border-Left' onClick={toggleTheme}>{themeName}</button>
        </div>
    );
}
 
export default Header;