import React, { useState } from 'react'
import AppStyle from './App.module.css'
import A from './A'
export default function App() {
  const [showBorder, setShowBorder] = useState(false)
  const hClick = () => {
    setShowBorder(true)
  }
  return (
    <div className={AppStyle.app}>
      <A />
      <p className={`${AppStyle.p1} ${showBorder ? AppStyle.border : ''}`}>App</p>
      <button onClick={hClick}>点我一下</button>
    </div>
  )
}
