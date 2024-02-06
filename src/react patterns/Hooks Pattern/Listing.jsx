import React, { useEffect } from 'react'
import useHover from './UseHover'

const Listing = () => {
    const [ref, isHovering] = useHover()

    useEffect(() => {
        if(isHovering) {
            console.log('hovered')
        }
    }, [isHovering])
  return (
    <>
    <div  ref={ref}>Listing</div>
   
    </>
  )
}

export default Listing