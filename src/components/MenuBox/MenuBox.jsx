import React, { useState } from 'react'

import { IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from './Menu/Menu'

import './MenuBox.scss'

const MenuBox = ({ children, style }) => {
    const [ menuOpen, setMenuOpen ] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    const menu = (
        <Menu 
            toggleMenu={ toggleMenu } 
        >
            { children }
        </Menu>
    )

    return (
        <div className="MenuBox">
            <IconButton 
                onClick={ toggleMenu }
                style={ style }
            >
                <MoreVertIcon />
            </IconButton>
            { menuOpen ? menu : null }
        </div>
    )
}

export default MenuBox