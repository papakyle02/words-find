import React from 'react';
import './Header.scss';
import menu from '../../menu.png';

const Header = () => {
    return (
        <div className='header'>
          <img src={menu} alt='menu button'/>
        </div>
    )
}

export default Header;