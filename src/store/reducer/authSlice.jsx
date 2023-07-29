import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: () => {
    let token = localStorage.getItem('x-token')
    if (token) {
      return {
        isLogin: true,
        token,
        user: JSON.parse(localStorage.getItem('x-user')),
        expirationTime: +localStorage.getItem('expirationTime'),
      }
    }
    return {
      isLogin: false,
      token: '',
      user: null,
      expirationTime: 0
    }
  },
  reducers: {
    // 登录
    login(state, action) {
      state.isLogin = true
      state.token = action.payload.token
      state.user = action.payload.user
      // 设置过期时间
      const currentTime = Date.now()
      // 设置登录的有效期
      const timeout = 1000 * 60 * 60 * 24 * 7 // 一周
      // const timeout = 10000
      state.expirationTime = currentTime + timeout // 设置失效日期
      localStorage.setItem('x-token', state.token)
      localStorage.setItem('x-user', JSON.stringify(state.user))
      localStorage.setItem('expirationTime', state.expirationTime)
    },
    // 退出
    logout(state, action) {
      state.isLogin = false
      state.token = ''
      state.user = null
      localStorage.removeItem('x-token')
      localStorage.removeItem('x-user')
    }
  }
})

export const { login, logout } = authSlice.actions