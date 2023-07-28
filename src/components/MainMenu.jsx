import React, { useEffect, useState } from 'react'
import { useLocation, useMatch, useNavigate } from 'react-router-dom'
import { Menu } from 'antd';
import { useSelector } from 'react-redux';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

let items = [
  getItem('菜单', 'grp', null, [
    getItem('首页', '/'),
    getItem('登录/注册', '/authForm')
  ], 'group'),
];


export default function MainMenu() {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useSelector(state => state.auth)

  const [Menus, setMenu] = useState(items)
  useEffect(() => {
    if (auth.isLogin) {
      setMenu([
        getItem('菜单', 'grp', null, [
          getItem('首页', '/'),
          getItem('用户信息', '/profile')
        ], 'group'),
      ])
    } else {
      setMenu(items)
    }
  }, [auth])

  const onClick = (e) => {
    navigate(e.key)
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={['/']}
      selectedKeys={location.pathname}
      mode="inline"
      items={Menus}
    />
  )
}
