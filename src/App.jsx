import React, { useEffect, useReducer, useState } from 'react'
import StudentList from './components/StudentList/StudentList'
import StuContent from './store/stuContent'
import './app.css'
export default function App() {
  const [studs, setStuds] = useState([])

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('数据正在加载中...')

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:1337/api/students')
      if (res.ok) {
        const data = await res.json()
        setStuds(data.data)
        setLoading(false)
      } else {
        throw new Error('数据加载失败，请重试！')
      }
    } catch (e) {
      setError('数据加载错误，请重试！')
    }
  }
  useEffect(() => {
    setLoading(true)
    // fetch('http://localhost:1337/api/students1').then((res) => {
    //   if (res.ok) {
    //     return res.json()
    //   }
    // }).then(data => {
    //   setStuds(data.data)
    //   setLoading(false)
    // }).catch(e => {
    //   setState('数据加载错误，请重试！')
    // })
    fetchData()
  }, [])

  return (
    <div className='app'>
      <StuContent.Provider value={{ fetchData }}>
        <button onClick={fetchData}>加载数据</button>
        {
          !loading && <StudentList studs={studs} />
        }
        {
          loading && <p>{error}</p>
        }
      </StuContent.Provider>
    </div>
  )
}
