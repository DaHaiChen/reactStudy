import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './Menu.module.css'
export default function Menu() {
  return (
    <div>
      <ul>
        {/* <li>
          <Link to="/">主页</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li> */}
        <li>
          <NavLink exact activeClassName={classes.active} to="/" >主页2</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName={classes.active} to="/about">关于2</NavLink>
        </li>
      </ul>
    </div>
  )
}
