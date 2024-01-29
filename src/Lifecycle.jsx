import React, { useState, useEffect } from 'react'

const Lifecycle = () => {
    const [showText, setShowText] = useState(false)
    const [text, setText] = useState('')

    useEffect(() => {
         console.log('COMPONENT MOUNTED');

         return () => {
            console.log('COMPONENT UNMOUNTED')
         }

    },[])

  return (
    <div>
        <button
        onClick={() => {
            setShowText(!showText)
        }}
        >Show Text</button>

        {showText && <div>
            <input name='sss'
            onChange={(e) => setText(e.target.value)}
            />
            <h1> {text} </h1>
            </div>}
    </div>
  )
}

export default Lifecycle