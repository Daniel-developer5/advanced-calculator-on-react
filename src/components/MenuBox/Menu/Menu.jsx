import React, { useState } from 'react'
import { useMountEffect } from '../../../hooks/hooks'

import './Menu.scss'

const Menu = ({ toggleMenu, children }) => {
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
            { children }
        </ul>
    )
}

export default Menu