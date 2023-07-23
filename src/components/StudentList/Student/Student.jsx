import React, { useContext, useState } from 'react'
import StuContent from '../../../store/stuContent'
import StudentForm from '../../StudentForm/StudentForm'
import useFetch from '../../../hook/useFetch'

export default function Student(props) {
  const { name, gender, age, address } = props.stu
  const ctx = useContext(StuContent)
  const { fetchData } = useFetch({
    url: `students/${props.stuId}`,
    method: 'delete'
  }, ctx.fetchData)
  const deleteHandler = async () => {
    fetchData()
  }
  const [isEdit, setIsEdit] = useState(false)
  const cancelEdit = () => {
    setIsEdit(false)
  }
  return (
    <>
      {
        !isEdit &&
        <tr>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{age}</td>
          <td>{address}</td>
          <td>
            <button onClick={() => deleteHandler(props.stuId)}>删除</button>
            <button onClick={() => setIsEdit(true)}>修改</button>

          </td>
        </tr>
      }
      {
        isEdit && <StudentForm stuId={props.stuId} stu={props.stu} onCancel={cancelEdit} />
      }
    </>
  )
}
