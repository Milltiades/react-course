import React from 'react'
import { useState } from 'react';

const State = () => {



    // const [answer, setAnswer] = useState('');
    // const [error, setError] = useState(null);
    // const [status, setStatus] = useState('typing');
  
    // if (status === 'success') {
    //   return <h1>That's right!</h1>
    // }
    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     setStatus('submitting');
    //     try {
    //       await submitForm(answer);
    //       setStatus('success');
    //     } catch (err) {
    //       setStatus('typing');
    //       setError(err);
    //     }
    //   }
    
    //   function handleTextareaChange(e) {
    //     setAnswer(e.target.value);
    //   }
    const [text, setText] = useState('');
    const [status, setStatus] = useState('typing');
  
    async function handleSubmit(e) {
      e.preventDefault();
      setStatus('sending');
      await sendMessage(text);
      setStatus('sent');
    }
  
    const isSending = status === 'sending';
    const isSent = status === 'sent';
  
    if (isSent) {
      return <h1>Thanks for feedback!</h1>
    }
    
  return (
    <>
<form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
    
      {/* <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form> */}
    </>
  )
}

export default State

// function submitForm(answer) {
//     // Pretend it's hitting the network.
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let shouldError = answer.toLowerCase() !== 'lima'
//         if (shouldError) {
//           reject(new Error('Good guess but a wrong answer. Try again!'));
//         } else {
//           resolve();
//         }
//       }, 1500);
//     });
//   }

// Pretend to send a message.
function sendMessage(text) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }