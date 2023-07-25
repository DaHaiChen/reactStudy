import React from 'react'
import Student from './Student/Student'
import StudentForm from '../StudentForm/StudentForm'
export default function StudentList(props) {
  return (
    <table>
      <caption><h2>学生列表</h2></caption>
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>地址</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {props.studs.map(stu => <Student key={stu.id} stuId={stu.id} stu={stu.attributes}></Student>)}
      </tbody>
      <tfoot>
        <StudentForm />
      </tfoot>
    </table>
  )
}
