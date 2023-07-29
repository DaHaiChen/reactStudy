import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/reducer/authSlice'

export default function useAutoLogout() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    // auth.expirationTime // 失效时间
    // Date.now() // 当前时间
    const timeout = auth.expirationTime - Date.now()
    if (timeout < 60000) {
      dispatch(logout())
      return
    }
    const timer = setTimeout(() => {
      dispatch(logout())
    }, timeout)

    return () => {
      clearTimeout(timer)
    }
  }, [auth])
}
