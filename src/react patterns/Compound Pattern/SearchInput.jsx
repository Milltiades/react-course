import React from 'react'
import { FlyOut } from './Compound'

const SearchInput = () => {
  return (
    <FlyOut>
        <FlyOut.Input/>
        <FlyOut.List>
            <FlyOut.ListItem value='Zugdidi'>Zugdidi</FlyOut.ListItem>
            <FlyOut.ListItem value='Tbilisi'>Tbilisi</FlyOut.ListItem>
            <FlyOut.ListItem value='Zestafoni'>Zestafoni</FlyOut.ListItem>
            <FlyOut.ListItem value='Gori'>Gori</FlyOut.ListItem>
            <FlyOut.ListItem value='Batumi'>Batumi</FlyOut.ListItem>
         
        </FlyOut.List>
    </FlyOut>
  )
}

export default SearchInput