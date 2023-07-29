import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import AuthFormPage from './pages/AuthFormPage'
import Layout from './layout'
import NeedAuth from './components/NeedAuth'


export default function App() {
  return (
    <div className='app'>
      <Layout >
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/authForm' element={<AuthFormPage></AuthFormPage>}></Route>
          <Route path='/profile' element={<NeedAuth> <ProfilePage /></NeedAuth>}></Route>
        </Routes>
      </Layout>
    </div>
  )
}
