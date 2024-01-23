import React, { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';
import { createContext } from 'react';
import Test from './Test';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';


import { createTodos } from './utils.jsx';
import TodoList from './TodoList.jsx';

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


// const todos = createTodos();

function App() {

  // const [tab, setTab] = useState('all');
  // const [isDark, setIsDark] = useState(false);
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
  {/* <Test1/> */}
  {/* <Test2/> */}

{/* raghaca */}

  {/* <button onClick={() => setTab('all')}>
        All
      </button>
      <button onClick={() => setTab('active')}>
        Active
      </button>
      <button onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      /> */}
<Test3/>
  </>
  );
}

export default App;