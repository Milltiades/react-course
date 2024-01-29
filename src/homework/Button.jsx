import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { MyContext } from './Context';

const Button = () => {
    const [count, setCount] = useState(0);
    const { setSum, reset, setReset } = useContext(MyContext)

    useEffect(() => {
if(reset) {
    setCount(0)
}
    },[reset])
  return (
    <div style={{background: 'red', color: 'white', padding: '5px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', cursor: 'pointer', }} onClick={() => {
        setCount(prev => prev + 1)
        setSum(prev => prev + 1)
        setReset(false)
    
    }}>{count}</div>
  )
}

export default Button