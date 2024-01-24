import React, { useState } from 'react'

const Test4 = () => {
   
    // const [to, setTo] = useState('Alice');
    // const [message, setMessage] = useState('Hello');
  
    // function handleSubmit(e) {
    //   e.preventDefault();
    //   setTimeout(() => {
    //     alert(`You said ${message} to ${to}`);
    //   }, 5000);
    // }
    const [number, setNumber] = useState(0);

  return (
//     <form onSubmit={handleSubmit}>
//     <label>
//       To:{' '}
//       <select
//         value={to}
//         onChange={e => setTo(e.target.value)}>
//         <option value="Alice">Alice</option>
//         <option value="Bob">Bob</option>
//       </select>
//     </label>
//     <textarea
//       placeholder="Message"
//       value={message}
//       onChange={e => setMessage(e.target.value)}
//     />
//     <button type="submit">Send</button>
//   </form>
<>
<h1>{number}</h1>
<button onClick={() => {
  setNumber(n => n + 1);
  setNumber(n => n + 1);
  setNumber(n => n + 1);
}}>+3</button>
</>
  )
}

export default Test4