import React from 'react'
import ReactDOM from 'react-dom'
import backdropClass from './barkdrop.module.css'
const backdropRoot = document.querySelector('#backdrop-root')

export default function barkdrop(props) {
  return ReactDOM.createPortal(<div {...props} className={`${backdropClass.barkdrop} ${props.className}`}>{props.children}</div>, backdropRoot)
}
