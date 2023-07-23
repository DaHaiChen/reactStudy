import React, { useCallback, useContext, useState } from 'react'
import StuContent from '../../store/stuContent'
import useFetch from '../../hook/useFetch'
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

  const { fetchData: addFetchStudent } = useFetch({
    url: 'students',
    method: 'post',
  }, ctx.fetchData)

  const addStudent = async () => {
    if (Object.values(inputData).filter(Boolean).length !== 4) return
    addFetchStudent(inputData)
    setInputData({
      name: '',
      gender: '女',
      age: '',
      address: ''
    })

  }

  const { fetchData: updateFetchStudent } = useFetch({
    url: `students/${props.stuId}`,
    method: 'put',
  }, ctx.fetchData)


  const updateHandler = () => {
    updateFetchStudent(inputData)
    props.onCancel()
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
