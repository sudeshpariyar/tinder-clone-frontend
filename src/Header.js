import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontsize="large" className="header__icon"/>
            </IconButton>
            <img className="header__logo" src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png" alt=""/>
            <IconButton>
                <ForumIcon fontsize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
