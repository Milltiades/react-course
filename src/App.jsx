import React, { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import Workout from './Workout';
// import ControlledAndUncontrolled from './ControlledAndUncontrolled';
// import Gallery from './Gallery';
// import ChildComponent from './ChildComponent';
// import { createContext } from 'react';
// import Test from './Test';
// import Test1 from './Test1';
// import Test2 from './Test2';
// import Test3 from './Test3';
// import Test4 from './Test4';
// import Challenge from './Challenge';
// import Arrays from './Arrays';
// import State from './State';
// import Memoization from './Memoization';
// import MyInput from './MyInput.jsx';
// import UseMemo from './UseMemo';
// import UseCallback from './UseCallback';

// import PresentationalComponent from './PresentationalComponent';
// import ContainerComponent from './ContainerComponent';

// import { createTodos } from './utils.jsx';
// import TodoList from './TodoList.jsx';
// import Clock from './Clock';
// import Profile from './Profile';
// import { people } from './data.jsx';
// import { getImageUrl } from './utils.jsx';


// export const MyContext = createContext();



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

// function useDisplayName() {
  // const [displayName, setDisplayName] = useState()

  // useEffect(() => {
  //   const data = fetchFromDatabase(props.userId)
  //   setDisplayName(data.displayName)
  // }, [])
  // return displayName;
// }

function App() {

  // const listItems = people.map(person =>
  //   <li key={person.id}>
  //     <img
  //       src={getImageUrl(person)}
  //       alt={person.name}
  //     />
  //     <p>
  //       <b>{person.name}:</b>
  //       {' ' + person.profession + ' '}
  //       known for {person.accomplishment}
  //     </p>
  //   </li>
  // )
// const displayName = useDisplayName()


  // const myBtn = useRef(null)
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   // This effect runs asynchronously after the browser has painted
  //   console.log('useEffect - Async');
  //   document.title = `Width: ${width}`;
  // }, [width]);

  // useLayoutEffect(() => {
  //   // This effect runs synchronously before the browser paints
  //   console.log('useLayoutEffect - Sync');
  //   setWidth(200); // Example DOM mutation
  // }, []);

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

  // const [sum, setSum] = useState(0);

  // const updateSum = (value) => {
  //   setSum((prevSum) => prevSum + value);
  // };

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

{/* <div>
      <p>Width: {width}</p>
    </div> */}

    {/* <button>{displayName}</button> */}
    {/* <Profile/>
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article> */}
      {/* <Toolbar
  onPlayMovie={() => alert('Playing!')}
  onUploadImage={() => alert('Uploading!')}
/> */}

{/* <Gallery/> */}
{/* <Test4/> */}
{/* <Challenge/> */}
{/* <Arrays /> */}
{/* <State/> */}
{/* <Memoization/> */}
{/* <UseMemo/> */}
{/* <UseCallback/> */}
{/* <ContainerComponent/> */}
{/* <ControlledAndUncontrolled/> */}
<Workout/>
  </>
  );
}

export default App;


// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }


// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }