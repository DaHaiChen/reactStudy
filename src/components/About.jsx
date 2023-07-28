import React from 'react'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Hello from './Hello';

export default function About() {
  const STU_DATA = [
    {
      id: '1',
      name: '孙悟空',
      age: 18
    },
    {
      id: '2',
      name: '猪八戒',
      age: 19
    },
    {
      id: '3',
      name: '沙和尚',
      age: 20
    }
  ]
  const nav = useNavigate()
  // console.log(nav);
  const routerPush = (id) => {
    // console.log(id);
    nav(`/student/${id}`, { replace: true }) // replace 不会产生历史记录
  }
  return (
    <div>
      <p>About</p>
      <div>
        {
          STU_DATA.map(stu => <p className='pStyle' key={stu.id} onClick={() => routerPush(stu.id)}>{stu.name}</p>)
        }
      </div>

      {/* 通过子路由来对Hello进行映射 /about/hello */}
      {/* <Routes>
        <Route path='hello' element={<Hello />}></Route>
      </Routes> */}

      {/* 
        Outlet 用来表示嵌套路由中的组件
          当嵌套路由中的路径匹配成功了，Outlet 则表示嵌套路由中的组件
          当嵌套路由中的路径没有匹配成功，Outlet 就什么都不展示
       */}
      <Outlet />
    </div>
  )
}
