import React from 'react'



function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}


const Test3 = () => {
let cups = [];

  for (let i = 1; i <= 5; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}


export default Test3