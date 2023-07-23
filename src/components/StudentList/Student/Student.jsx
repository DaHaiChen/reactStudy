import React, { useContext, useState } from 'react'
import StuContent from '../../../store/stuContent'
import StudentForm from '../../StudentForm/StudentForm'

export default function Student(props) {
  const { name, gender, age, address } = props.stu
  const ctx = useContext(StuContent)
  const deleteHandler = async (id) => {
    try {
      const res = await fetch(`http://localhost:1337/api/students/${id}`, { method: 'delete' })
      if (res.ok) {
        // alert('删除成功')
        ctx.fetchData()
        console.log(ctx);
      } else {
        throw new Error()
      }
    } catch (e) {
      // alert('删除失败')
    }
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
