import React from 'react'

import './Buttons.scss'

import { Button } from '@material-ui/core'
import OperationButtons from './OperationButtons/OperationButtons'
import MathMenu from './MathMenu/MathMenu'

const Buttons = ({ getExpression, backspace, readyToCalc }) => {
    const values = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']

    const setExpression = e => getExpression(e.target.textContent)

    const buttons = values.map(button => {
        return (
            <li key={ button }>
                <Button onClick={ setExpression }>{ button }</Button>
            </li>
        )
    })

    return (
        <div className="Buttons">
            <ul>
                { buttons }
                <li>
                    <Button onClick={ readyToCalc }>=</Button>
                </li>
            </ul>
            <OperationButtons 
                getExpression={ getExpression }
                backspace={ backspace } 
            />
            <MathMenu />
        </div>
    )
}

export default Buttons