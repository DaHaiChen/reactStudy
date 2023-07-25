// 使用 RTK 来构建store

import { configureStore } from "@reduxjs/toolkit";
import { stuReducers } from './stuSlice'
import { schoolReducers } from './school'
// 创建store对象
const store = configureStore({
  reducer: {
    student: stuReducers,
    school: schoolReducers
  }
})

export default store