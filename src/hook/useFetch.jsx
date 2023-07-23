/**
 * React中的钩子函数只能在函数组件中或自定义钩子中调用
 *      当我们需要将React中钩子函数提取到一个公共区域时，就可以使用自定义钩子
 */

import React, { useCallback, useState } from 'react'

export default function useFetch() {
  const [data, setDate] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('数据正在加载中...')
  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('http://localhost:1337/api/students')
      if (res.ok) {
        const data = await res.json()
        setDate(data.data)
        setLoading(false)
      } else {
        throw new Error('数据加载失败，请重试！')
      }
    } catch (e) {
      setError('数据加载错误，请重试！')
    }
  }, [])

  return {
    data, loading, error, fetchData
  }
}
