import React, { useState, useCallback, useMemo } from 'react'
import List from './List'

const UseCallback = () => {

    const [number, setNumber] = useState(0)
    const [ dark, setDark] = useState(false)

    const getItems = useCallback((incrementer) => {
        return [number + incrementer, number + 1 +incrementer, number + 2+incrementer]
    }, [number])

    const theme = {
        backgroundColor : dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333'
    }
  return (
    <div style={theme}>
        <input type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}

        />
        <button onClick={() => setDark(prevDark => !prevDark)}>Toggle theme</button>
    <List getItems={getItems}/>
    </div>
  )
}

export default UseCallback