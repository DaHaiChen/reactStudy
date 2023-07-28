import React, { useEffect } from 'react'
import './app.css'
import Menu from './components/Menu'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Student from './components/Student'
import Hello from './components/Hello'
import Abc from './components/Abc'
export default function App() {
  return (
    <div className='app'>
      <Menu />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}>
          <Route path='hello' element={<Hello />}></Route>
          <Route path='abc' element={<Abc />}></Route>
        </Route>
        <Route path='/student/:id' element={<Student></Student>}></Route>
      </Routes>
    </div>
  )
}
