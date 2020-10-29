import React from 'react'

import { Button } from '@material-ui/core'

const OperationButtons = ({ getExpression, backspace }) => {
    const symbols = [247, 215, 8722, 43]
        .map(code => String.fromCodePoint(code))

    const setExpression = e => getExpression(e.target.textContent)

    const clearAll = () => clearAll.time = Date.now()

    const confirmClearAll = () => {
        const mouseDownTime = Date.now() - clearAll.time
        
        if (mouseDownTime >= 500) 
            backspace({ clearAll: true })   
    }

    const elems = symbols.map(symbol => {
        return (
            <li key={ symbol }>
                <Button onClick={ setExpression }>
                    { symbol }
                </Button>
            </li>
        )
    })

    return (
        <ul>
            <li>
                <Button 
                    onClick={ backspace }
                    onMouseDown={ clearAll }
                    onTouchStart={ clearAll }
                    onMouseUp={ confirmClearAll }
                    onTouchEnd={ confirmClearAll }
                >
                    <i className="fas fa-backspace"></i>
                </Button>
            </li>
            { elems }   
        </ul>
    )
}

export default OperationButtons