import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    token: '',
    user: null
  },
  reducers: {
    // 登录
    login(state, action) {
      state.isLogin = true
      state.token = action.payload.token
      state.user = action.payload.user
    },
    // 退出
    logout(state, action) {
      state.isLogin = false
      state.token = ''
      state.user = null
    }
  }
})

export const { login, logout } = authSlice.actions