import React, { createRef, useState, useEffect } from 'react'
import { useExpEffect } from '../../hooks/hooks'

import MenuBox from '../MenuBox/MenuBox'

import './Output.scss'

const Output = ({ expression, prevExp, setOpenHistory }) => {
    const [ after, setAfter ] = useState(true)

    const output = createRef()

    const style = { 
        fontSize: expression.length >= 13 ? '30px' : '40px'
    }

    useEffect(() => output.current.scrollTo( output.current.scrollWidth, 0 ))

    useExpEffect(() => {
        if (!after) setAfter(true)
    }, expression)

    const onScroll = () => {
        if (
            output.current.scrollWidth - (output.current.scrollLeft + output.current.clientWidth) > 1
        ) {
            setAfter(false)
        }
    }

    return (
        <div className="output-box">
            <MenuBox setOpenHistory={ setOpenHistory } />
            <span>{ prevExp }</span>
            <div className={ `after-box ${ after ? 'after' : null }` }>
                <div 
                    onScroll={ onScroll }
                    className="Output"
                    ref={ output } 
                    style={ style }
                >
                    { expression }
                </div>
            </div>
        </div>
    )
}

export default Output