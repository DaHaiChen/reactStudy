import React from 'react'
import MealClass from './Meal.module.css'
import Counter from '../../UI/Counter/Counter'
/**
 * 
 * @returns 食物组件
 */
export default function Meal(props) {
  const { meal, onAdd, onSub } = props
  return (
    <div className={MealClass.meal}>
      <div className={MealClass.imgBox}>
        <img src={meal.img} alt="" />
      </div>
      <div>
        <h2 className={MealClass.title}>{meal.title}</h2>
        <p className={MealClass.desc}>{meal.desc}</p>
        <div className={MealClass.priceWrap}>
          <span className={MealClass.price}>{meal.price}</span>
          <div>
            <Counter meal={meal} onAdd={onAdd} onSub={onSub} />
          </div>
        </div>
      </div>
    </div>
  )
}
