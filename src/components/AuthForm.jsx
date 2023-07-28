import React, { useRef, useState } from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useLoginMutation, useRegisterMutation } from '../store/api/Auth'
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/reducer/authSlice'
import { useNavigate } from 'react-router-dom';
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

export default function AuthForm() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoginForm, setIsLoginForm] = useState(true)
  // 引入注册的 api
  const [regFn, { error: regError }] = useRegisterMutation()
  const [loginFn, { error: loginError }] = useLoginMutation()

  const onFinish = async (value) => {
    if (isLoginForm) {
      // 登录
      const res = await loginFn({
        ...value,
        identifier: value.username
      })
      if (!res.error) {
        // 登录成功，保存用户信息
        dispatch(login({
          token: res.data.jwt,
          user: res.data.user,
        }))
        messageApi.open({
          type: 'success',
          content: '登录成功',
        });
        navigate('/', { replace: true })
      } else {
        messageApi.open({
          type: 'error',
          content: '用户名或密码错误',
        });
      }
    } else {
      // 注册
      const res = await regFn(value)
      if (!res.error) {
        // 注册成功
        setIsLoginForm(true)
        messageApi.open({
          type: 'success',
          content: '注册成功',
        });
      } else {
        messageApi.open({
          type: 'error',
          content: '用户名或者邮箱重复',
        });
      }
    }
  }
  return (
    <div>
      {contextHolder}
      <h2 style={{ textAlign: 'center', marginBottom: '6px' }}>{isLoginForm ? '登录' : '注册'}</h2>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="username" label="用户名" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input />
        </Form.Item>
        {
          !isLoginForm ?
            <Form.Item name="email" label="邮箱" rules={[{ required: true, message: '请输入邮箱' }]}>
              <Input />
            </Form.Item> : ''
        }
        <Form.Item name="password" label="密码" rules={[{ required: true, message: '请输入密码' }]}>
          <Input type='password' />
        </Form.Item>
        <Form.Item {...tailLayout} >
          <Button type="primary" htmlType="submit">
            {isLoginForm ? '登录' : '注册'}
          </Button>
          <Button type="link" style={{ fontSize: '12px' }} htmlType="button" onClick={e => {
            e.preventDefault()
            setIsLoginForm(state => !state)
          }}
          >
            {
              isLoginForm ? '没有账号？去注册' : '去登录'
            }
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
