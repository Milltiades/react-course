import React from 'react'
import withStyles from './react patterns/HOC/WithStyles'
// import ContainerComponent from './react patterns/ContainerComponent'
// import Text from './react patterns/HOC/Text'
// import WrappedText from './react patterns/HOC/Text'
// import withStyles from './react patterns/HOC/WithStyles'
// import Text1 from './react patterns/HOC/Text'
import Text from './react patterns/HOC/Text'
import Temperature from './react patterns/RPPattern/Temperature'
import TemperatureConverter from './react patterns/RPPattern/TemperatureConverter'
import Listing from './react patterns/Hooks Pattern/Listing'
import Users from './react patterns/workout/Users'
const Patterns = () => {
   
   const NewText = withStyles(Text)
  return (
   
   
    // <NewText/>
    // <Temperature/>
    // <TemperatureConverter/>
    // <Listing/>
    <Users/>

   
  )
}

export default Patterns
