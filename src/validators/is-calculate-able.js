const isCalculateAble = expression => {
    const symbols = [247, 215, 8722, 43]
        .map(code => String.fromCodePoint(code))
    
    const regExp = new RegExp(`[${ symbols.join('') }][0-9]`, 'g')
    
    return expression && regExp.test(expression.slice(1))
}

export default isCalculateAble