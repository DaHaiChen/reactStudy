import React, { useContext } from 'react'
import CounterClass from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cartContext'
// 计数器组件
export default function Counter(props) {
  // 获取 cartContext
  const ctx = useContext(CartContext)
  const { meal } = props
  const addButtonHandler = () => {
    ctx.addItem(meal)
  }
  const subButtonHandler = () => {
    ctx.removeItem(meal)
  }
  const showSub = meal.amount && meal.amount >= 0 ? <>
    <div className={CounterClass.sub} onClick={subButtonHandler}>
      <FontAwesomeIcon icon={faMinus} />
    </div>
    <span className={CounterClass.num}>{meal.amount}</span>
  </> : ''
  return (
    <div className={CounterClass.counter}>
      {
        showSub
      }
      <div className={CounterClass.add} onClick={addButtonHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  )
}
