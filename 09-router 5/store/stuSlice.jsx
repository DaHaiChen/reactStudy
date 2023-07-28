import { configureStore, createSlice } from "@reduxjs/toolkit";
// createSlice 创建 reducer 的切片
// 需要一个配置对象作为参数，通过对象的不同的属性来指定它的配置
const stuSlice = createSlice({
  name: 'student', // 用来自动生成 action 中的 type
  initialState: {
    name: '孙悟空',
    age: 18,
    address: '花果山',
    gender: '男'
  },// state 的初始值
  reducers: { // 指定 state 的各种操作,直接在对象中添加方法
    setName(state, action) {
      // 可以通过不同的方法来指定对 state 的不同操作
      // state 代理对象，可以直接修改
      // action 
      state.name = action.payload
    },
    setAge(state, action) {
      state.age = action.payload
    }
  }
})

export const { setName, setAge } = stuSlice.actions
export const { reducer: stuReducers } = stuSlice 
