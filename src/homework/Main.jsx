import React, { useState } from "react";
import Button from "./Button";
import { MyContext } from "./Context";

const Main = () => {
   
const [sum, setSum] = useState(0)
const [reset, setReset] = useState(false)

  return (
    <MyContext.Provider value={{sum, setSum, reset, setReset}}>
    <div style={{ display: 'flex', flexDirection:'column', gap:'10px', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
    <button style={{background: 'blue', color: 'white', padding: '5px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', cursor: 'pointer',border: 'none' }}>{sum}</button>
    <div style={{display: 'flex',  gap:'10px'}}>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      </div>
      <button
      style={{background: 'green', color: 'white', padding: '5px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', cursor: 'pointer', border: 'none'}}
      onClick={() =>{
        setSum(0)
        setReset(true)
        }}>reset</button>
      </div>
     </MyContext.Provider>
  );
};

export default Main;
