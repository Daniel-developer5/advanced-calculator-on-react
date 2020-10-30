import React, { useState } from 'react'

import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Button } from '@material-ui/core'
import MenuBox from '../MenuBox/MenuBox'
import { HistoryOverlay } from '../Overlay'
import Empty from './Empty/Empty'

import './History.scss'

const History = ({ examples, openHistory, setOpenHistory, setExamples }) => {
    const [ openConfirm, setOpenConfirm ] = useState(false)

    const style = { color: '#1a73e9' }

    const action = clearExamples => {
        setOpenConfirm(false)

        if (clearExamples)
            setExamples([])
    }

    const list = examples.map(({ expression, result, date }, index) => {
        return (
            <li key={ index }>
                <div>{ date }</div>
                <div>{ expression }</div>
                <div>{ result }</div>
            </li>
        )
    })

    return (                                
        <div className={ `History ${ openHistory ? 'open' : null }` }>
            <header>
                <IconButton 
                    style={ style }
                    onClick={ () => setOpenHistory(false) }
                >
                    <ArrowBackIcon />
                </IconButton>
                <div>
                    <span>History</span>
                    <MenuBox style={ style }>
                        <li>
                            <Button onClick={ () => setOpenConfirm(true) }>
                                Clear History
                            </Button>
                        </li>
                    </MenuBox>
                </div>
            </header>
            { list[0] ? <ul>{ list }</ul> : <Empty /> }
            { openConfirm ? <HistoryOverlay action={ action } /> : null }
        </div>
    )
}

export default History