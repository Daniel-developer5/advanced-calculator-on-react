import React, { useState } from 'react'

import Overlay from '../Overlay'
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'

const ThemesOverlay = ({ setThemesOverlay, setTheme, theme }) => {
    const [ checked, setChecked ] = useState(theme === 'light' ? true : false)

    const changeTheme = () => {
        setTheme(checked ? 'light' : 'dark')

        setThemesOverlay(false)
    }

    return (
        <Overlay>
            <div className="title">Choose theme</div>
            <FormControl component="fieldset">
                <RadioGroup>
                    <FormControlLabel 
                        value="light" 
                        control={
                            <Radio 
                                color="primary" 
                                onClick={ () => setChecked(true) } 
                                checked={checked}
                            />
                        } 
                        label="Light" 
                    />
                    <FormControlLabel 
                        value="dark" 
                        control={
                            <Radio 
                                color="primary" 
                                onClick={ () => setChecked(false) } 
                                checked={!checked}
                            />
                        } 
                        label="Dark" 
                    />
                </RadioGroup>
            </FormControl>
            <div className="btn-box">
                <Button onClick={ () => setThemesOverlay(false) } >Cancel</Button>
                <Button onClick={ changeTheme } >OK</Button>
            </div>
        </Overlay>
    )
}

export default ThemesOverlay