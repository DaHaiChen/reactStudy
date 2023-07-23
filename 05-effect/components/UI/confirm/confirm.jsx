import React from 'react'
import Barkdrop from '../barkdrop/barkdrop'
import classes from './confirm.module.css'
export default function confirm(props) {
  const { onCancel, onOk, confirmText } = props
  return (
    <Barkdrop onClick={onCancel} className={classes.barkdrop}>
      <div onClick={e => e.stopPropagation()} className={classes.confirm}>
        <p className={classes.text}>{confirmText}</p>
        <div className={classes.buttonBox}>
          <button onClick={(e) => onCancel(e)}>取消</button>
          <button className={classes.affirm} onClick={onOk}>确认</button>
        </div>
      </div>
    </Barkdrop>
  )
}
