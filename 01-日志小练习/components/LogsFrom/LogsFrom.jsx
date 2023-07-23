import React, { useState } from 'react'
import Card from '../UI/Card/Card.jsx'
import './LogsFrom.css'

export default function LogsFrom({ list, setList }) {
  // const [date, setDate] = useState('')
  // const [desc, setDesc] = useState('')
  // const [time, setTime] = useState('')

  // const changeDate = (e) => {
  //   setDate(e.target.value)
  // }

  // const changeDesc = (e) => {
  //   setDesc(e.target.value)
  // }

  // const changeTime = (e) => {
  //   setTime(e.target.value)
  // }

  /**
   * 简写成一个state
   */
  const [inputData, setInputData] = useState({
    time: "",
    date: '',
    desc: ''
  })

  const changeInput = (e, key) => {
    setInputData({
      ...inputData,
      [key]: e.target.value
    })
  }

  const addPlan = (e) => {
    e.preventDefault()
    if (Object.values(inputData).includes('')) return alert('请完整输入信息之后在添加')
    const id = list.map(x => x.id).length ? Math.max(...list.map(x => x.id)) + 1 : 0
    const fromData = {
      ...inputData,
      date: new Date(inputData.date),
      id
    }
    setList([fromData, ...list])
    setInputData({
      time: "",
      date: '',
      desc: ''
    })
  }
  return (
    <Card className='logsFrom'>
      <form onSubmit={(e) => addPlan(e)}>
        <div className='from-item'>
          <label htmlFor='date'>日期：</label>
          {/* <input placeholder='请选择日期' id='date' value={date} onChange={(e) => changeDate(e)} type='date' /> */}
          <input placeholder='请选择日期' id='date' value={inputData.date} onChange={(e) => changeInput(e, 'date')} type='date' />
        </div>
        <div className='from-item'>
          <label htmlFor='desc' >内容：</label>
          {/* <input placeholder='请输入内容' id='desc' value={desc} onChange={(e) => changeDesc(e)} type='text' /> */}
          <input placeholder='请输入内容' id='desc' value={inputData.desc} onChange={(e) => changeInput(e, 'desc')} type='text' />
        </div>
        <div className='from-item'>
          <label htmlFor='time' >时长：</label>
          {/* <input placeholder='请输入时长' id='time' value={time} onChange={(e) => changeTime(e)} type='number' /> */}
          <input placeholder='请输入时长' id='time' value={inputData.time} onChange={(e) => changeInput(e, 'time')} type='number' />
        </div>
        <div className='from-btn'>
          <button>添加</button>
        </div>
      </form>
    </Card>
  )
}


