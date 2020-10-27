import { useEffect } from 'react'

export const useMountEffect = callback => useEffect(callback, [])

export const useExpEffect = (callback, expression) => useEffect(callback, [ expression ])