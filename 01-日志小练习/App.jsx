import React, { useState } from 'react'
import Logs from './components/Logs/Logs.jsx'
import LogsFrom from './components/LogsFrom/LogsFrom.jsx'
import './App.css'
export default function App() {
  const defaultList = [
    {
      id: '001',
      date: new Date('2023-07-01'),
      desc: '乾坤大挪移',
      time: 29
    },
    {
      id: '002',
      date: new Date('2023-08-02'),
      desc: '九阴白骨爪',
      time: 30
    },
    {
      id: '003',
      date: new Date('2023-09-03'),
      desc: '凌波微步',
      time: 31
    },
    {
      id: '004',
      date: new Date('2021-10-04'),
      desc: '九阳神功',
      time: 32
    }
  ]
  const [list, setList] = useState(defaultList)
  return (
    <div className='App'>
      <LogsFrom list={list} setList={setList}></LogsFrom>
      <Logs list={list} setList={setList}></Logs>
    </div>
  )
}

