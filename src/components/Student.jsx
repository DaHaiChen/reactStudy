import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

export default function Student() {
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
  const { state } = useLocation()
  const stu = STU_DATA.find(s => s.id == (state.id || '1'))

  return (
    <div>
      <p>Student</p>
      <p>{stu.id}--{stu.name}--{stu.age}</p>
    </div>
  )
}
