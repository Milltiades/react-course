import React, { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';
import { createContext } from 'react';
import Test from './Test';
import Test1 from './Test1';

export const MyContext = createContext();



// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment' :
//       return state + 1;
//     case 'decrement' :
//       return state - 1;  
//     default:
//       throw new Error()
//   }
// }

function App() {


  // const [user, setUser] = useState({
  //   name: 'giga',
  //   surname: 'kakulia',
  // });


  // const myRef = useRef()

  // useEffect(() => {
  //   myRef.current = 'Hello, useRef!'

  //   setTimeout(() => {
  //     console.log(myRef.current)
  //     myRef.current = 'Bye Bye'
     
  //   }, 2000)
  // },[myRef])

  // const [state, dispatch] = useReducer(reducer, 0) 

  return (
  //   <MyContext.Provider value={{ user, setUser }}>
  //     <ChildComponent />
  // <h1>useRef Example</h1>

  //   </MyContext.Provider>
  <>
  {/* Count: {state}
  <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
  <button onClick={()=> dispatch({type: 'increment'})}>+</button> */}
  {/* <Test/> */}
  <Test1/>
  </>
  );
}

export default App;