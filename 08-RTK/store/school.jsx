
import { createSlice } from "@reduxjs/toolkit";
const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    name: "花果山小学",
    address: '花果山大道113号'
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload
    },
    setAddress(state, action) {
      state.address = action.payload
    }
  }
})
// 切片对象会自动生成 aciton
// action 中存储的是slice自动生成的action创建器
export const { setName, setAddress } = schoolSlice.actions
export const { reducer: schoolReducers } = schoolSlice