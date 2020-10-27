import { Parser } from 'expr-eval'

const calculate = (expression, setResult, setPrevExp) => {
    setPrevExp(expression)
    
    const mathExp = expression
        .replace(String.fromCodePoint(8722), '-')
        .replace(String.fromCodePoint(247), '/')
        .replace(String.fromCodePoint(215), '*')
    
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
}

export default calculate