import React from 'react'

const PresentationalComponent = (props) => {
    console.log('test :', props.listings)
  return (
    <div>
        {props.listings.map((listing) => {
            return <div key={listing.id}>
                <div>
                    <h1>{listing.city}</h1>
                    <h2>{listing.name}</h2>
                </div>
            </div>
        })}
    </div>
  )
}

export default PresentationalComponent