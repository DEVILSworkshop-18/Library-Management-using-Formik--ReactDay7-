import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import CreateBook from './Pages/CreateBook';
import EditBook from './Pages/EditBook';
import TotalBook from './Pages/TotalBook';

const App = () => { 
  
  // the id useState here helps to get the id which needs to be editted and sends that to the edit books page
  const [id,setId]=useState(0)

  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/createbook' element={<CreateBook/>} />
        <Route path='/editbook/:id' element={<EditBook id={id}/>} />
        <Route path='/books' element={<TotalBook  setId={setId}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;