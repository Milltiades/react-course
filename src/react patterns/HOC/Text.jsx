import React from 'react'

const Text = ({styles}) => {
  return (
    <>
    <h1 style={styles}>Hi Gedeon!</h1>
    <button style={{...styles, fontSize: '5rem', background: 'red'}}>click me</button>
    </>
    
  )
}

export default Text