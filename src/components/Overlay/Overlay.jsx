import React from 'react'

import './Overlay.scss'

const Overlay = ({ children }) => {
    return (
        <div className="Overlay">
            <div>
                { children }
            </div>
        </div>
    )
}

export default Overlay