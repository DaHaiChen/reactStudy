import React, { useContext, useState } from 'react'
import Barkdrop from '../../UI/barkdrop/barkdrop'
import CartDetailsClass from './CartDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cartContext'
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/confirm/confirm'
export default function CartDetails() {
  const ctx = useContext(CartContext)
  const [showConfirm, setShowConfirm] = useState(false)
  const CartList = ctx.items.length ? ctx.items.map(i => <Meal meal={i} key={i.id} />) : ''
  // 切换showConfirm
  const clearCart = (e) => {
    e.stopPropagation()
    setShowConfirm(state => !state)
  }
  // 清空购物车
  const okHandler = () => {
    // ctx.clearCart()
    ctx.cartDispatch({ type: 'CLEAR' })
  }
  return (
    <Barkdrop>
      {showConfirm ? <Confirm confirmText='确认清空购物车吗？' onCancel={clearCart} onOk={okHandler} /> : null}
      <div className={CartDetailsClass.CartDetails} onClick={e => e.stopPropagation()}>
        <header className={CartDetailsClass.header}>
          <h2 className={CartDetailsClass.title}>餐品详情</h2>
          <div className={CartDetailsClass.clear} onClick={clearCart}>
            <FontAwesomeIcon icon={faTrash} />
            <span className={CartDetailsClass.empty}>清空购物车</span>
          </div>
        </header>
        <div className={CartDetailsClass.mealsList}>
          {
            CartList
          }
        </div>
      </div>
    </Barkdrop>
  )
}
