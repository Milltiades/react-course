import React, { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';
import { createContext } from 'react';
import Test from './Test';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import MyInput from './MyInput.jsx';

import { createTodos } from './utils.jsx';
import TodoList from './TodoList.jsx';
import Clock from './Clock';

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

  // const myBtn = useRef(null)
  const [width, setWidth] = useState(0);
  useEffect(() => {
    // This effect runs asynchronously after the browser has painted
    console.log('useEffect - Async');
    document.title = `Width: ${width}`;
  }, [width]);

  useLayoutEffect(() => {
    // This effect runs synchronously before the browser paints
    console.log('useLayoutEffect - Sync');
    setWidth(200); // Example DOM mutation
  }, []);

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


  // const ref = useRef(null);

  // function handleClick() {
  //   ref.current.focus();
  //   // This won't work because the DOM node isn't exposed:
  //   // ref.current.style.opacity = 0.5;
  // }

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
{/* <Test3/> */}
{/* <Clock/> */}

{/* <form>
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form> */}

<div>
      <p>Width: {width}</p>
    </div>
  </>
  );
}

export default App;