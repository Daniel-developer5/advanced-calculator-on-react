import React from 'react'

import HistoryIcon from '@material-ui/icons/History';

import './Empty.scss'

const Empty = () => {
    return (
        <div className="Empty">
            <HistoryIcon />
            <span>No history</span>
        </div>
    )
}

export default Empty