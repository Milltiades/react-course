import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';
import { createContext } from 'react';

export const MyContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: 'giga',
    surname: 'kakulia',
  });


  const myRef = useRef()

  useEffect(() => {
    myRef.current = 'Hello, useRef!'

    setTimeout(() => {
      console.log(myRef.current)
      myRef.current = 'Bye Bye'
     
    }, 2000)
  },[myRef])


  return (
    <MyContext.Provider value={{ user, setUser }}>
      <ChildComponent />
  <h1>useRef Example</h1>

    </MyContext.Provider>
  );
}

export default App;