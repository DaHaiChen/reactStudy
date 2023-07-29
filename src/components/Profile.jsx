import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const auth = useSelector(state => state.auth)
  return (
    <div>
      <div>用户信息</div>
      <h2>登录之后才能看到--{auth.user.username}</h2>
    </div>
  )
}
