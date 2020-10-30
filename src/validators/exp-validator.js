const expValidator = expression => {
    const symbols = [247, 215, 8722, 43]
        .map(code => String.fromCodePoint(code))

    const symbolPairs = [
        symbols.slice(0, 2), symbols.slice(2, 4)
    ]

    const 
        regExp = new RegExp(`[${ symbols.join('') }]`, 'g'),
        regExpDT = new RegExp(`[${ symbolPairs[0].join('') }]`, 'g'),
        regExpPM = new RegExp(`[${ symbolPairs[1].join('') }]`, 'g')

    const 
        expSlice = expression.slice(-1),
        expSliceDouble = expression.slice(-2, -1),
        slicedStr = `${expSliceDouble}${expSlice}`

    const parsedByDot = expression
        .split(regExp)
        .slice(-1)[0]
        .split('')
        .filter(char => char === '.')

    if (slicedStr === '..') {
        return expression.slice(0, -1)
    } 

    if ( 
        [ ...expression.slice(-3).matchAll(regExp) ].length === 3
    ) {
        return expression = expression.slice(0, -1)
    } 

    if ( 
        expression[0] === symbols[0] ||
        expression[0] === symbols[1]
    ) {
        expression = expression.slice(1)
    }

    symbols.forEach(char => {
        if (slicedStr === char + char) {
            expression = expression.slice(0, -1)
        }
    })

    symbolPairs.forEach(symbolPair => {
        if (
            slicedStr === symbolPair.join('') ||
            slicedStr === symbolPair.reverse().join('')
        ) {
            expression = `${expression.slice(0, -2)}${expression.slice(-1)}`
        }  
    })

    if (parsedByDot.length === 2) {
        expression = expression.slice(0, -1)
    }

    if (
        expSlice.match(regExpDT) && expSliceDouble.match(regExpPM)
    ) {
        expression = expression.slice(0, -1)
    }

    return expression    
}

export default expValidator