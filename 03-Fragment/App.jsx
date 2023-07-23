import React, { useState } from 'react'
import AppStyle from './App.module.css'
import Out from './Out'
export default function App() {

  /**
   *  <> </> 幽灵节点
   *  Out 组件也可以当成幽灵组件
   *  React.Fragment
   */
  return (
    <React.Fragment>
      <div>第一个组件</div>
      <div>第二个组件</div>
      <div>第三个组件</div>
    </React.Fragment>
  )
}
