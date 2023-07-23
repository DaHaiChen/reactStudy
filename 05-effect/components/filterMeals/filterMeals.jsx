import React, { useState, useEffect } from 'react'
import filterMealsClass from './filterMeals.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function FilterMeals(props) {

  const { onFilter } = props
  const [keyWord, setKeyWord] = useState('')

  const changeKeyWord = (e) => {
    setKeyWord(e.target.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('asdads');
      onFilter(keyWord)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [keyWord])
  return (
    <div className={filterMealsClass.filterMeals}>
      <div className={filterMealsClass.inputOut}>
        <FontAwesomeIcon className={filterMealsClass.searchIcon} icon={faSearch} />
        <input value={keyWord} onChange={(e) => changeKeyWord(e)} className={filterMealsClass.searchInput} type="text" placeholder='请输入关键字' />
      </div>
    </div>
  )
}
