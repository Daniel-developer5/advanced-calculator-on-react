import React from 'react'

import Overlay from '../Overlay'
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'

const ThemesOverlay = () => {
    return (
        <Overlay>
            <div className="title">Choose theme</div>
            <FormControl component="fieldset">
                <RadioGroup>
                    <FormControlLabel 
                        value="light" 
                        control={<Radio color="primary" checked />} 
                        label="Light" 
                    />
                    <FormControlLabel 
                        value="dark" 
                        control={<Radio color="primary" />} 
                        label="Dark" 
                    />
                </RadioGroup>
            </FormControl>
            <div className="btn-box">
                <Button>Cancel</Button>
                <Button>OK</Button>
            </div>
        </Overlay>
    )
}

export default ThemesOverlay