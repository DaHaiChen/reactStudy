import React from 'react'
import { Button, message, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/reducer/authSlice'
import { useLocation, useNavigate } from 'react-router-dom';
export default function Home() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const auth = useSelector(state => state.auth)

	const confirm = (e) => {
		dispatch(logout())
		// console.log(auth);
		message.success('退出登录')
		navigate('/authForm')
	};

	return (
		<div>
			<div>首页</div>
			<h2>任何人都能看的主页</h2>
			{
				auth.isLogin ?
					<Popconfirm
						title="退出登录"
						description="你确定要退出吗？"
						onConfirm={confirm}
						okText="确定"
						cancelText="取消"
					>
						<Button type="link" danger>退出</Button>
					</Popconfirm>
					: ''
			}
		</div>
	)
}
