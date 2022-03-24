import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home'
import Add from './Component/Add'
import Edit from './Component/Edit'

function App() {
  return (
   <>
     <div className="mt-5">
      <BrowserRouter>
    <Routes>
     
      <Route path="/" element={<Home/>}/>
        
        <Route path="/add" element={<Add/>}/>
        
        <Route path="/edit/:id" element={<Edit/>}/>
   
    </Routes>
  </BrowserRouter>
     </div>
   </> 
  );
}

export default App;