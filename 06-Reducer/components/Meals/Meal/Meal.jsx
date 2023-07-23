import React from 'react'
import MealClass from './Meal.module.css'
import Counter from '../../UI/Counter/Counter'
/**
 * 
 * @returns 食物组件
 */
export default function Meal(props) {
  const { meal, noMeal } = props
  const desc = noMeal ? <p className={MealClass.desc}>{meal.desc}</p> : <p></p>
  return (
    <div className={MealClass.meal}>
      <div className={MealClass.imgBox}>
        <img src={meal.img} alt="" />
      </div>
      <div className={MealClass.descBox}>
        <h2 className={MealClass.title}>{meal.title}</h2>
        {
          desc
        }
        <div className={MealClass.priceWrap}>
          <span className={MealClass.price}>{meal.price}</span>
          <div>
            <Counter meal={meal} />
          </div>
        </div>
      </div>
    </div>
  )
}
