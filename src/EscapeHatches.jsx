import React from "react";
import { useRef, useState } from "react";

const EscapeHatches = () => {
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

const [text, setText] = useState('');
const [isSending, setIsSending] = useState(false);
const timeoutRef = useRef(null);

function handleSend() {
  setIsSending(true);
  timeoutRef.current = setTimeout(() => {
    alert('Sent!');
    setIsSending(false);
  }, 3000);
}

function handleUndo() {
  setIsSending(false);
  clearTimeout(timeoutRef.current);
}

  return (
    //      <button onClick={handleClick}>
    //   Click me!
    // </button>
    <>
{/* <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button> */}

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
      }
    </>
  );
};

export default EscapeHatches;
