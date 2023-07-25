/**
 * React中的钩子函数只能在函数组件中或自定义钩子中调用
 *      当我们需要将React中钩子函数提取到一个公共区域时，就可以使用自定义钩子
 */

import React, { useCallback, useState } from 'react'

/**
 * 自定义fetch
 * @param {*} reqObj 请求参数 url method contentType
 * @param {*} succeedFn 请求成功执行的函数
 * @returns 
 */
export default function useFetch(reqObj, succeedFn) {
  let BaseUrl = 'http://localhost:1337/api/'
  const { url, method, contentType } = reqObj
  const [data, setDate] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('数据正在加载中...')
  // 发请求时传参数
  const fetchData = useCallback(async (inputData) => {
    setLoading(true)
    try {
      const res = await fetch(BaseUrl + url, {
        method: method || 'get',
        headers: {
          'Content-type': contentType || 'application/json'
        },
        body: method || method?.toLoWerCase() == 'GET' ? JSON.stringify({ data: inputData }) : null
      })
      if (res.ok) {
        const data = await res.json()
        setDate(data.data)
        setLoading(false)
        succeedFn()
      } else {
        throw new Error('数据加载失败，请重试！')
      }
    } catch (e) {
      console.log(e);
      setError('数据加载错误，请重试！')
    }
  }, [])

  return {
    data, loading, error, fetchData
  }
}
