
import Card from '../UI/Card/Card.jsx'
import Date from './date.jsx'
import './studyPlan.css'
import ConfirmModal from '../confirmModal/confirmModal.jsx'
import { useState } from 'react'

const studyPlan = (props) => {
  const { id, course, time, minute, delPlanId } = props
  const [showConfirm, setShowConfirm] = useState(false)
  const delPlan = (id) => {
    // 使用浏览器自带提示框
    // const res = window.confirm('确定要删除吗？删除后不可恢复！')
    // if (res) {
    //   delPlanId(id)
    // }

    setShowConfirm(true)
  }
  // 取消函数
  const modalCancel = () => {
    setShowConfirm(false)
  }
  // 确认函数
  const modalAffirm = () => {
    delPlanId(id)
    setShowConfirm(false)
  }
  return <Card className="studyPlan">
    {showConfirm && <ConfirmModal confirmText={'该操作不可恢复，确认吗？'} onCancel={modalCancel} onOk={modalAffirm} />}
    <Date date={time} />
    <div className='learningPath'>
      <div className='studyName'>{course}</div>
      <div className='stydyTime'>{minute}分钟</div>
    </div>
    <div className='delPlan' onClick={() => delPlan(id)} >删除</div>
  </Card>
}

export default studyPlan