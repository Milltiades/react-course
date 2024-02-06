import React, { useEffect, useState } from 'react'
import PresentationalComponent from './PresentationalComponent'

const ContainerComponent = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://house-lydiahallie.vercel.app/api/listings')
        .then((res) => res.json())
        .then((res) => setData(res))
    }, [])

    if(!data) return null

    
  return (
    <PresentationalComponent listings = {data.listings}/>
   
  )
}

export default ContainerComponent