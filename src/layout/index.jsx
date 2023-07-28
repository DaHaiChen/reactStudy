import React from 'react'
import MainMenu from '../components/MainMenu'
import classes from './index.module.css'
export default function Layout(props) {
  return (
    <div className={classes.layout}>
      <div className={classes.layoutLeft}>
        <MainMenu />
      </div>
      <div className={classes.layoutRight}>
        {
          props.children
        }
      </div>
    </div>
  )
}
