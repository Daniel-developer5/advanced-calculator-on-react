const expValidator = expression => {
    const symbols = [247, 215, 8722, 43]
        .map(code => String.fromCodePoint(code))

    const symbolPairs = [
        symbols.slice(0, 2), symbols.slice(2, 4)
    ]

    const 
        expSlice = expression.slice(-1),
        expSliceDouble = expression.slice(-2, -1),
        slicedStr = `${expSlice}${expSliceDouble}`

    if ( expSlice === '.' && expSliceDouble === '.' ) {
        expression = expression.slice(0, -1)
    } 

    if ( 
        expression[0] === symbols[0] ||
        expression[0] === symbols[1]
    ) {
        expression = expression.slice(1)
    }

    symbols.forEach(char => {
        if ( expSlice === char && expSliceDouble === char) {
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

    return expression    
}

export default expValidator