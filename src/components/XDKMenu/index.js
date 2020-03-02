import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../services/auth'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import './index.css'

const XDKMenu = ({ navItem }) => {

    const [ isShowing, setIsShowing ] = useState(false)

    return (
        <nav>
            <div 
                className={`menu-overlay ${ isShowing ? 'menu-overlay-active' : '' }`} 
                onClick={ () => setIsShowing(!isShowing) }
            />
            <div className="hamburger-button" onClick={ () => setIsShowing(!isShowing) }>
                <FontAwesomeIcon icon={ faBars } />
            </div>
            <Link to="/inicio">
                <div className={ `menu-item ${ isShowing ? 'menu-item-1-active' : '' }` }>
                    <FontAwesomeIcon icon={ faHome } />
                </div>
            </Link>
            <div>
                <div className={ `menu-item ${ isShowing ? 'menu-item-2-active' : '' }` }>
                    <FontAwesomeIcon icon={ faCog } />
                </div>
            </div>
            <div style={{ cursor: 'pointer' }}>
                <div className={ `menu-item ${ isShowing ? 'menu-item-3-active' : '' }` } onClick={ () => logout() }>
                    <FontAwesomeIcon icon={ faSignOutAlt } />
                </div>
            </div>
        </nav>
    ) // return
} // XDKMenu

export default XDKMenu;