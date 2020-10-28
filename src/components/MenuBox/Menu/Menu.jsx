import React, { useState } from 'react'
import { useMountEffect } from '../../../hooks/hooks'

import { Button } from '@material-ui/core'

import './Menu.scss'

const Menu = ({ toggleMenu, openHistory, setOpenHistory }) => {
    const [ menuClass, setMenuClass ] = useState('')

    const hideMenu = () => {
        setMenuClass('')
        setTimeout(toggleMenu, 100)
    }

    useMountEffect(() => {
        setTimeout(() => setMenuClass('open'), 100)

        document.addEventListener('click', hideMenu)

        return () => document.removeEventListener('click', hideMenu)
    })

    return (
        <ul className={ `Menu ${ menuClass }` }>
            <li>
                <Button 
                    className="not-hide"
                    onClick={ () => setOpenHistory(true) }
                > 
                    History
                </Button>
            </li>
            <li>
                <Button className="not-hide">Choose theme</Button>
            </li>
        </ul>
    )
}

export default Menu