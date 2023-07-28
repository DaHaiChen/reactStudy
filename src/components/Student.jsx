import React from 'react'
import { useLocation, useMatch, useParams } from 'react-router-dom'

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
  const { id } = useParams()
  const location = useLocation()
  const match = useMatch('/student/:id')
  console.log(location, match);
  const stu = STU_DATA.find(s => s.id == id)
  return (
    <div>
      <p>Student</p>
      <p>{stu.id}--{stu.name}--{stu.age}</p>
    </div>
  )
}
