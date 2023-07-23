import React, { useContext, useEffect, useState } from 'react'
import classes from './payment.module.css'
import CartContext from '../../../../store/cartContext'
export default function Cart() {
  const ctx = useContext(CartContext)

  return (
    <div className={classes.Cart}>
      <p className={classes.price}>合计<span>{ctx.totalPrice}</span></p>
      <button className={classes.button}>去支付</button>
    </div>
  )
}
