import React, { useContext, useState } from 'react'
import StuContent from '../../store/stuContent'
export default function StudentForm() {
  const [inputData, setInputData] = useState({
    name: '',
    gender: '女',
    age: '',
    address: ''
  })
  const ctx = useContext(StuContent)
  const changeInputData = (e, key) => {
    setInputData(data => ({
      ...data, [key]: e.target.value
    }))
  }
  const addStudent = async () => {
    const res = await fetch(`http://localhost:1337/api/students`,
      {
        method: 'post',
        body: JSON.stringify({ data: inputData }),
        headers: {
          'Content-type': 'application/json'
        }
      })
    if (res.ok) {
      console.log('添加成功');
      ctx.fetchData()
      setInputData({
        name: '',
        gender: '女',
        age: '',
        address: ''
      })
    }
  }
  return (
    <tr>
      <td>
        <input onChange={(e) => changeInputData(e, 'name')} value={inputData.name} type="text" />
      </td>
      <td>
        <select onChange={(e) => changeInputData(e, 'gender')} value={inputData.gender}>
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </td>
      <td>
        <input value={inputData.age} onChange={(e) => changeInputData(e, 'age')} type="text" />
      </td>
      <td>
        <input value={inputData.address} onChange={(e) => changeInputData(e, 'address')} type="text" />
      </td>
      <td>
        <button onClick={addStudent}>添加</button>
      </td>
    </tr>
  )
}
