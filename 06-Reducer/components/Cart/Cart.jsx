import React, { useContext, useEffect, useState } from 'react'
import CartClass from './Cart.module.css'
import iconImg from '../../assets/bag.png'
import CartContext from '../../store/cartContext'
import CartDetails from './CartDetails/CartDetails'
import Checkout from './Checkout/Checkout'
export default function Cart() {
  const ctx = useContext(CartContext)

  // 控制详情是否显示
  const [showDetails, setShowDetails] = useState(false)
  // 详情页
  const showDetailsHandler = () => {
    if (!ctx.totalAmount) return
    setShowDetails(!showDetails)
  }

  // 结账页的显示
  const [showCheckout, setShowCheckout] = useState(false)
  const showCheckoutHandler = () => {
    setShowCheckout(state => !state)
  }
  // 监听购物车数据，当数据为0时，隐藏列表
  useEffect(() => {
    if (ctx.items.length == 0) {
      setShowDetails(false)
    }
  }, [ctx.items])

  const showTotalAmount = ctx.totalAmount ? <span className={CartClass.totalAmount}>{ctx.totalAmount}</span> : ''
  const showPrice = ctx.totalPrice ? <p className={CartClass.price}>{ctx.totalPrice}</p> : <p className={CartClass.noMeal}>未选购商品</p>
  const showButton = (ctx.totalPrice && ctx.totalAmount) ? <button className={CartClass.button} onClick={showCheckoutHandler}>去结算</button> : <button className={CartClass.disabled}>去结算</button>

  return (
    <div className={CartClass.Cart} onClick={showDetailsHandler}>
      {
        showCheckout ? <Checkout onshow={showCheckoutHandler} /> : null
      }
      {/* 购物车详情 */}
      {
        showDetails ? <CartDetails /> : null
      }
      <div className={CartClass.icon}>
        <img src={iconImg} alt="" />
        {showTotalAmount}
      </div>
      {showPrice}
      {showButton}
    </div>
  )
}
