import React from 'react';
import './Header.scss';
import menu from '../../menu.png';

const Header = () => {
    return (
        <div className='header'>
          <img src={menu}/>
        </div>
    )
}

export default Header;