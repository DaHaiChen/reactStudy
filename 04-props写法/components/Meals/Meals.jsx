import React from 'react'
import Meal from './Meal/Meal'
import MealsClass from './Meals.module.css'
export default function Meals(props) {
  const { meals, onAdd, onSub } = props
  const mealsList = meals.map(m => <Meal onAdd={onAdd} onSub={onSub} key={m.id} meal={m} />)
  return (
    <div className={MealsClass.Meals}>
      {
        mealsList
      }
    </div>
  )
}
