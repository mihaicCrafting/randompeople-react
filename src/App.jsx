import { useState } from 'react'
import './App.scss'
import Header from './Components/Header/Header'
import {
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Human from './Components/Human/Human'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/human/:id" element={<Human/>}/>
        <Route path="*" element={<HomePage/>}/>
      </Routes>

    </div>
  )
}

export default App
