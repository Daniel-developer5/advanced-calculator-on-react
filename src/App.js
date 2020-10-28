import React, { useState } from 'react'

import './App.scss'

import Output from './components/Output/Output'
import Buttons from './components/Buttons/Buttons'
import calculate from './calculator/calculate'
import expValidator from './validator/exp-validator'
import History from './components/History/History'

const App = () => {
  const 
    [ expression, setExpression ] = useState(''),
    [ prevExp, setPrevExp ] = useState(''),
    [ openHistory, setOpenHistory ] = useState(false),
    [ examples, setExamples ] = useState([])

  const getExpression = text => {
    setExpression( expValidator(`${expression}${text}`) )
  }

  const backspace = ({ clearAll = false }) => {
    clearAll ? setExpression('') : setExpression(`${ expression.slice(0, -1) }`)
  }

  const readyToCalc = () => {
    if (expression) {
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
        />
      </div>
    </div>
  )
}

export default App