import logo from './logo.svg';
import './App.css';
import CompA from './compA';
import React, { createContext } from 'react'
const data = createContext()

function App() {
  const name = "Rishav"
  
  
  return (
    <>
    <data.Provider value={name}>
       <CompA />
     </data.Provider>
    
    
    </>
  );
}

export default App;
export {data}
