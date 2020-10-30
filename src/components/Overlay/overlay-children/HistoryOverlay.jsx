import React from 'react'

import Overlay from '../Overlay'
import { Button } from '@material-ui/core'

const HistoryOverlay = ({ action }) => {
    return (
        <Overlay>
            <p>Clear history and memory?</p>
            <div className="btn-box">
                <Button onClick={ () => action() }>Dismiss</Button>
                <Button onClick={ () => action(true) }>Clear</Button>
            </div>
        </Overlay>
    )
}

export default HistoryOverlay