const expValidator = expression => {
    if (
        expression.slice(-1) === '.' &&
        expression.slice(-2, -1) === '.' 
    ) {
        return expression.slice(0, -1)
    } else {
        return expression
    }
}

export default expValidator