import React, { useState } from 'react'

import Output from './components/Output/Output'
import Buttons from './components/Buttons/Buttons'
import calculate from './calculator/calculate'
import { expValidator, isCalculateAble } from './validators'
import History from './components/History/History'
import { ThemesOverlay } from './components/Overlay'

import './App.scss'

const App = () => {
  const 
    [ expression, setExpression ] = useState(''),
    [ prevExp, setPrevExp ] = useState(''),
    [ openHistory, setOpenHistory ] = useState(false),
    [ examples, setExamples ] = useState([]),
    [ themesOverlay, setThemesOverlay ] = useState(false)

  const getExpression = text => setExpression( expValidator(`${expression}${text}`) )

  const backspace = ({ clearAll = false }) => {
    clearAll ? setExpression('') : setExpression(`${ expression.slice(0, -1) }`)

    setPrevExp('')
  }

  const readyToCalc = () => {
    if ( isCalculateAble(expression, true) ) {
      const example = calculate(expression, setExpression, setPrevExp)

      setExamples([ ...examples, example ])
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <Output 
          expression={ expression }
          prevExp={ prevExp }
          setOpenHistory={ setOpenHistory }
          setThemesOverlay={ setThemesOverlay }
        />
        <Buttons 
          getExpression={ getExpression } 
          backspace={ backspace }  
          readyToCalc={ readyToCalc }
        />
        <History
          examples={ examples }
          openHistory={ openHistory }
          setOpenHistory={ setOpenHistory } 
          setExamples={ setExamples }
        />
        { themesOverlay ? <ThemesOverlay /> : null }
      </div>
    </div>
  )
}

export default App