import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import classes from './Checkout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cartContext'
import CheckoutItem from './CheckoutItem/CheckoutItem'
import Payment from './payment/payment'
const checkoutRoot = document.getElementById('checkout-root')

export default function Checkout(props) {
  const ctx = useContext(CartContext)
  const { onshow } = props
  return ReactDOM.createPortal(<div className={classes.checkout}>
    <div className={classes.close}>
      <FontAwesomeIcon onClick={onshow} icon={faTimes} />
    </div>
    <div className={classes.mealsDesc}>
      <header className={classes.header}>
        <h2 className={classes.title}>餐品详情</h2>
      </header>
      <div className={classes.mealList}>
        {
          ctx.items.map(i => <CheckoutItem meal={i} key={i.id} />)
        }
      </div>
    </div>
    <footer className={classes.footer}>
      <p className={classes.totalPrice}>合计<span>{ctx.totalPrice}</span></p>
    </footer>
    <Payment />
  </div>, checkoutRoot)
}
