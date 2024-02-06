import React from 'react'
import ThemeProvider from './context/ThemeProvider'
import Header from './Header'
import Hero from './Hero'

const Main = () => {
  return (
    <ThemeProvider>
     
        <Header/>
        <Hero/>
      
    </ThemeProvider>
  )
}

export default Main