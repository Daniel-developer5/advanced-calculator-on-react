import React, { useState } from 'react'

import './App.scss'

import Output from './components/Output/Output'
import Buttons from './components/Buttons/Buttons'
import calculate from './calculator/calculate'
import validator from './validator/validator'

const App = () => {
  const [ expression, setExpression ] = useState('')
  const [ prevExp, setPrevExp ] = useState('')

  const getExpression = text => setExpression( validator(`${expression}${text}`) )

  const backspace = ({ clearAll = false }) => {
    clearAll ? setExpression('') : setExpression(`${ expression.slice(0, -1) }`)
  }

  const readyToCalc = () => calculate(expression, setExpression, setPrevExp)

  return (
    <div className="App">
      <div className="calculator">
        <Output 
          expression={ expression }
          prevExp={ prevExp }
        />
        <Buttons 
          getExpression={ getExpression } 
          backspace={ backspace }  
          readyToCalc={ readyToCalc }
        />
      </div>
    </div>
  )
}

export default App