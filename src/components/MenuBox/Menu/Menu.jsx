import React, { useState } from 'react'
import { useMountEffect } from '../../../hooks/hooks'

import { Button } from '@material-ui/core'

import './Menu.scss'

const Menu = ({ toggleMenu }) => {
    const [ menuClass, setMenuClass ] = useState('')

    const hideMenu = e => {
        if (
            !e.target.className.match('not-hide') &&
            !e.target.parentNode.className.match('not-hide')
        ) {
            setMenuClass('')
            setTimeout(toggleMenu, 100)
        }
    }

    useMountEffect(() => {
        setTimeout(() => setMenuClass('open'), 100)

        document.addEventListener('click', hideMenu)

        return () => document.removeEventListener('click', hideMenu)
    })

    return (
        <ul className={ `Menu ${ menuClass }` }>
            <li>
                <Button className="not-hide">History</Button>
            </li>
            <li>
                <Button className="not-hide">Choose theme</Button>
            </li>
        </ul>
    )
}

export default Menu