import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './app.css'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import AuthFormPage from './pages/AuthFormPage'
import Layout from './layout'
import { useSelector } from 'react-redux'


export default function App() {
  const auth = useSelector(state => state.auth)
  return (
    <div className='app'>
      <Layout >
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/authForm' element={<AuthFormPage></AuthFormPage>}></Route>
          <Route path='/profile' element={auth.isLogin ? <ProfilePage /> : <Navigate to={'/authForm'} replace />}></Route>
        </Routes>
      </Layout>
    </div>
  )
}
