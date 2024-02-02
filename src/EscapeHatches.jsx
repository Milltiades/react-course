import React from "react";
import { useRef, useState, forwardRef,useImperativeHandle } from "react";
import { flushSync } from 'react-dom';

// const MyInput = forwardRef((props, ref) => {
//     const realInputRef = useRef(null);
//   useImperativeHandle(ref, () => ({
//     // Only expose focus and nothing else
//     focus() {
//       realInputRef.current.focus();
//     },
//   }));
//     return <input {...props} ref={realInputRef} />;
//   });
const EscapeHatches = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);
  
    function handleClick() {
      const nextIsPlaying = !isPlaying;
      setIsPlaying(nextIsPlaying);
  
      if (nextIsPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  

//     const listRef = useRef(null);
//   const [text, setText] = useState('');
//   const [todos, setTodos] = useState(
//     initialTodos
//   );

//   function handleAdd() {
//     const newTodo = { id: nextId++, text: text };
//     flushSync(() => {
//       setText('');
//       setTodos([ ...todos, newTodo]);      
//     });
//     listRef.current.lastChild.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest'
//     });
//   }

    // const inputRef = useRef(null);

    // function handleClick() {
    //   inputRef.current.focus();
    // }
  
    // const itemsRef = useRef(null);
    // function scrollToId(itemId) {
    //     const map = getMap();
    //     const node = map.get(itemId);
    //     node.scrollIntoView({
    //       behavior: 'smooth',
    //       block: 'nearest',
    //       inline: 'center'
    //     });
    //   }
    //   function getMap() {
    //     if (!itemsRef.current) {
    //       // Initialize the Map on first usage.
    //       itemsRef.current = new Map();
    //     }
    //     return itemsRef.current;
    //   }
    // const inputRef = useRef(null);

    // function handleClick() {
    //   inputRef.current.focus();
    // }
  // let ref = useRef(0);

  // function handleClick() {
  //   ref.current = ref.current + 1;
  //   alert('You clicked ' + ref.current + ' times!');
  // }

//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     // Start counting.
//     setStartTime(Date.now());
//     setNow(Date.now());

    // setInterval(() => {
    //   // Update the current time every 10ms.
    //   setNow(Date.now());
    // }, 10);
//     clearInterval(intervalRef.current)
//     intervalRef.current = setInterval(() => {
//         setNow(Date.now())
//     }, 5)
//   }

//   function handleStop() {
//     clearInterval(intervalRef.current);
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

// const [text, setText] = useState('');
// const [isSending, setIsSending] = useState(false);
// const timeoutRef = useRef(null);

// function handleSend() {
//   setIsSending(true);
//   timeoutRef.current = setTimeout(() => {
//     alert('Sent!');
//     setIsSending(false);
//   }, 3000);
// }

// function handleUndo() {
//   setIsSending(false);
//   clearTimeout(timeoutRef.current);
// }

// const firstCatRef = useRef(null);
// const secondCatRef = useRef(null);
// const thirdCatRef = useRef(null);

// function handleScrollToFirstCat() {
//   firstCatRef.current.scrollIntoView({
//     behavior: 'smooth',
//     block: 'nearest',
//     inline: 'center'
//   });
// }

// function handleScrollToSecondCat() {
//   secondCatRef.current.scrollIntoView({
//     behavior: 'smooth',
//     block: 'nearest',
//     inline: 'center'
//   });
// }

// function handleScrollToThirdCat() {
//   thirdCatRef.current.scrollIntoView({
//     behavior: 'smooth',
//     block: 'nearest',
//     inline: 'center'
//   });
// }

  return (
 
    <>
     <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
     {/* <>
      <button onClick={handleAdd}>
        Add
      </button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <ul ref={listRef}>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul> */}
    {/* </> */}
      {/* <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </> */}
     {/* <nav>
        <button onClick={() => scrollToId(0)}>
          Tom
        </button>
        <button onClick={() => scrollToId(5)}>
          Maru
        </button>
        <button onClick={() => scrollToId(9)}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          {catList.map(cat => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div> */}
     {/* <nav>
        <button onClick={handleScrollToFirstCat}>
          Tom
        </button>
        <button onClick={handleScrollToSecondCat}>
          Maru
        </button>
        <button onClick={handleScrollToThirdCat}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div> */}
     {/* <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button> */}
{/* <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button> */}
{/* 
<input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Undo
        </button>
      } */}
    </>
  );
};

export default EscapeHatches;


// const catList = [];
// for (let i = 0; i < 10; i++) {
//   catList.push({
//     id: i,
//     imageUrl: 'https://placekitten.com/250/200?image=' + i
//   });
// }


// let nextId = 0;
// let initialTodos = [];
// for (let i = 0; i < 20; i++) {
//   initialTodos.push({
//     id: nextId++,
//     text: 'Todo #' + (i + 1)
//   });
// }
