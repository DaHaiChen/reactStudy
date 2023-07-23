import React, { useEffect } from 'react'
import StudentList from './components/StudentList/StudentList'
import StuContent from './store/stuContent'
import './app.css'
import useFetch from './hook/useFetch'
export default function App() {
  const { data: studs, loading, error, fetchData } = useFetch({ url: 'students' })

  useEffect(() => {
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
