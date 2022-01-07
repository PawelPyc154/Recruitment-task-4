import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

const useArrayLocalStorage = <T>(key: string, defaultValue: T[] = []) => {
  const [array, setArray] = useLocalStorage<T[]>(key, defaultValue)

  function push(element: T) {
    setArray([...array, element])
  }

  function filter(callback: (element: T) => boolean) {
    setArray(array.filter(callback))
  }

  function update(index: number, newElement: T) {
    setArray([
      ...array.slice(0, index),
      newElement,
      ...array.slice(index + 1, array.length),
    ])
  }

  function remove(index: number) {
    setArray([
      ...array.slice(0, index),
      ...array.slice(index + 1, array.length),
    ])
  }

  function clear() {
    setArray([])
  }

  return { array, set: setArray, push, filter, update, remove, clear }
}
export { useArrayLocalStorage }
