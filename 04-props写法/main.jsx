import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 设置移动端的适配
// 除以几视口的宽度就是多少rem，现在我们设置视口的总宽度为750rem
document.documentElement.style.fontSize = 100 / 750 + 'vw'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
