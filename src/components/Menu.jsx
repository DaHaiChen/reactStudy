import React from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'
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
          <NavLink to="/" >主页2</NavLink>
        </li>
        <li>
          <NavLink to="/about">关于2</NavLink>
        </li>
        <li>
          <NavLink to="/student/1">Stunent/1</NavLink>

          {/* <Navigate to="/student/1">11</Navigate> */}
        </li>
      </ul>
    </div>
  )
}
