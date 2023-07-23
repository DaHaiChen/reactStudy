import React, { useCallback, useContext, useState } from 'react'
import StuContent from '../../store/stuContent'
export default function StudentForm(props) {
  const [inputData, setInputData] = useState({
    name: props.stu ? props.stu.name : '',
    gender: props.stu ? props.stu.gender : '男',
    age: props.stu ? props.stu.age : '',
    address: props.stu ? props.stu.address : ''
  })
  const ctx = useContext(StuContent)
  const changeInputData = (e, key) => {
    setInputData(data => ({
      ...data, [key]: e.target.value
    }))
  }
  const addStudent = async () => {
    if (Object.values(inputData).filter(Boolean).length !== 4) return
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
  const updateStudent = useCallback(async (id, newStu) => {
    try {
      const res = await fetch(`http://localhost:1337/api/students/${id}`, {
        method: 'put',
        body: JSON.stringify({ data: newStu }),
        headers: {
          'Content-type': 'application/json'
        }
      })
      if (res.ok) {
        console.log('修改成功');
        props.onCancel()
        ctx.fetchData()
      }
    } catch (e) {

    }
  }, [])

  const updateHandler = () => {
    updateStudent(props.stuId, inputData)
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
        {
          props.stu ? <><button onClick={props.onCancel}>取消</button> <button onClick={updateHandler}>确认</button></> : <button onClick={addStudent}>添加</button>
        }
      </td>
    </tr>
  )
}
