
import React from 'react'
import './ConfirmModal.css'
import BackDrop from '../BackDrop/BackDrop'
export default function confirmModal(props) {
  const { onCancel, onOk } = props
  return (
    <BackDrop>
      <div className='modalBody'>
        <div className='modal-title'>删除</div>
        <div className='modal-body'>
          {props.confirmText}
        </div>
        <div className='modal-footer'>
          <button className='modal-affirm' onClick={onOk} >确定</button>
          <button className='modal-cancel' onClick={onCancel}>取消</button>
        </div>
      </div>
    </BackDrop>
  )
}
