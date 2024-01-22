import React, { useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';
import { createContext } from 'react';

export const MyContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: 'giga',
    surname: 'kakulia',
  });

  return (
    <MyContext.Provider value={{ user, setUser }}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

export default App;