import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setAge } from '../store/stuSlice'
import { setName as setSchoolName, setAddress } from '../store/school'
export default function home() {
	// useSelector 用来加载 state 中的数据
	const { student, school } = useSelector(state => state)
	const dispatch = useDispatch()
	const editName = () => {
		dispatch(setName('猪八戒'))
	}
	const editAge = () => {
		dispatch(setAge(38))
	}
	return (
		<div>
			<div>
				<p>{JSON.stringify(student)}</p>
				<p>{student.name}-- {student.age}--{student.gender}--{student.address}</p>
				<button onClick={editName}>修改姓名</button>
				<button onClick={editAge}>修改age</button>
			</div>
			<hr />
			<div>
				<p>{school.name}--{school.address}</p>
				<button onClick={() => dispatch(setSchoolName('花果山大学'))}>修改学校</button>
				<button onClick={() => dispatch(setAddress('花果山大道'))}>修改学校地址</button>
			</div>
		</div>
	)
}
