


import React, { useContext, useState } from 'react';
import { MyContext } from "./App"; // Correct import statement

const ChildComponent = () => {
    
    const {user, setUser } = useContext(MyContext);

    const handleClick = () => {
        setUser({...user, name: 'Lasha'})
    }
  
    return (
        <div>
           
            <h2>{user.name}</h2>
            <h2>{user.surname}</h2>
            <button onClick={handleClick}>click me</button>
            
        </div>
    );
}

export default ChildComponent;
