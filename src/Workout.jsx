import React, { useEffect, useState } from 'react'
import Text from './Text'

const Workout = () => {

    const [ showText, setShowText] = useState(false)


  return (

    <>
    <button onClick={() => setShowText(prev => !prev)}>Show Text</button>
    {showText && <Text/>}
    </>
    
  )
}

export default Workout