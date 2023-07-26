import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import './app.css'
import Home from './components/home'
import About from './components/About'
import Menu from './components/Menu'
import Student from './components/Student'
export default function App() {

  // 将路由组件进行映射
  //         使用 Route 来映射地址和组件
  // 属性： path 映射的 url
  //               component 要挂载的组件
  //       当 Route 的 路径被访问时，其对应组件就会自动挂载
  // 注意：默认情况下 Route 并不是严格匹配
  // 只要url地址的头部和path一致，组件就会挂载

  return (
    <div className='app'>
      <Menu />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/about" component={About} /> */}
      <Route path="/about">
        <About />
        <Route path="/about/student">
          <Student />
        </Route>
      </Route>
    </div>
  )
}
