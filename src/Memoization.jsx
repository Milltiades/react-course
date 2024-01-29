import React, { useEffect } from 'react'

const Memoization = () => {
    useEffect(() => {
        const memoizedFib = memoize(fib)
        console.log(memoizedFib(40))
        console.log(memoizedFib(40))
        console.log(memoizedFib(40))
        console.log(memoizedFib(30))
        console.log(memoizedFib(20))
        console.log(memoizedFib(10))
        console.log(memoizedFib(3))

    }, [])


const fib = (pos) => {
    if (pos < 2) return pos;
    return fib(pos - 1) + fib(pos - 2)
}

const memoize = (fn) => {
    const cache = {}

    return (...args) => {
        if(args.toString() in cache) {
            console.log(cache)
            return cache[args.toString()]
        }
        const result = fn(...args)
        cache[args.toString()] = result
        return result
    }
}

  return (
    <div>Memoization</div>
  )
}

export default Memoization