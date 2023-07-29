import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function NeedAuth(props) {
  const auth = useSelector(state => state.auth)
  const location = useLocation()
  return auth.isLogin ? props.children : <Navigate to={'/authForm'} replace state={{ preLocation: location }} />
}
