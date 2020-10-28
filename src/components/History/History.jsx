import React from 'react'

import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoreVernIcon from '@material-ui/icons/MoreVert'

import './History.scss'

const History = ({ examples, openHistory, setOpenHistory }) => {
    const style = { color: '#1a73e9' }

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
                    <IconButton style={ style } >
                        <MoreVernIcon />
                    </IconButton>
                </div>
            </header>
            <ul>
                { list }
            </ul>
        </div>
    )
}

export default History