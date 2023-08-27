import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Allocated_Assessment from './Components/TakeAssessment/Allocatedassessment';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="Allocated" element={<Allocated_Assessment/>} /> 
          {/* Added route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
