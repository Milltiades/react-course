import React, { useState } from 'react'
import PresentationalComponent from './PresentationalComponent'

const ContainerComponent = () => {
    const [name, setName] = useState('Word')

    const handleChange = (e) => {
        setName(e.target.value)
    }
  return (
    <div>
        <input type="text" value={name} onChange={handleChange} />
        <PresentationalComponent name ={name}/>
    </div>
  )
}

export default ContainerComponent