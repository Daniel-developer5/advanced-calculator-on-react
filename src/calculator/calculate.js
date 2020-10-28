import { Parser } from 'expr-eval'
import moment from 'moment'

const calculate = (expression, setResult, setPrevExp) => {
    setPrevExp(expression)
    
    const mathExp = expression
        .replaceAll(String.fromCodePoint(8722), '-')
        .replaceAll(String.fromCodePoint(247), '/')
        .replaceAll(String.fromCodePoint(215), '*')
    
    const parser = new Parser()

    const numResult = parser.parse(mathExp).evaluate()
    
    const arrResult = String(numResult.toFixed(10)).split('')
    const indexOfDot = arrResult.indexOf('.')

    for (let i = arrResult.length; i > indexOfDot - 1; i--) {
        if ( !(+arrResult[i]) ) 
            arrResult.splice(i, 1)
        else 
            break
    }
    
    setResult(arrResult.join(''))

    return { 
        expression, 
        result: arrResult.join(''),
        date: moment().format('LL').slice(0, -6)
    }
}

export default calculate