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
const Patterns = () => {
   
   const NewText = withStyles(Text)
  return (
   
   
    // <NewText/>
    // <Temperature/>
    <TemperatureConverter/>

   
  )
}

export default Patterns
