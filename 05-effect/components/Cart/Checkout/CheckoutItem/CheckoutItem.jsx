import React from 'react'
import Counter from '../../../UI/Counter/Counter'
import classes from './CheckoutItem.module.css'
export default function CheckoutItem(props) {
  const { meal } = props
  return (
    <div className={classes.checkoutItem}>
      <div className={classes.mealImg}>
        <img src={meal.img} alt="" />
      </div>
      <div className={classes.desc}>
        <p className={classes.mealName}>{meal.title}</p>
        <div className={classes.counterPrice}>
          <Counter meal={meal} />
          <span className={classes.price}>{meal.price * meal.amount}</span>
        </div>
      </div>
    </div >
  )
}
