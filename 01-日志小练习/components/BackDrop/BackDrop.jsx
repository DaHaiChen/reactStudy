import React from 'react'
import ReactDOM from 'react-dom'
import './BackDrop.css'
const backdrop = document.querySelector('#backdrop-root')
export default function BackDrop(props) {
  return (
    ReactDOM.createPortal(<div className='backdrop'>
      {props.children}
    </div>, backdrop)
  )
}
