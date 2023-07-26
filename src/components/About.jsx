import React from 'react'
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'

export default function About() {
  const STU_DATA = [
    {
      id: '1',
      name: '孙悟空',
      age: 18
    },
    {
      id: '2',
      name: '猪八戒',
      age: 19
    },
    {
      id: '3',
      name: '沙和尚',
      age: 20
    }
  ]

  // const location = useLocation()
  // const match = useRouteMatch()
  // const params = useParams()
  const history = useHistory()
  // console.log(location, match, params, history);
  const routerPush = (id) => {
    history.push({ pathname: '/about/student', state: { id } })
  }
  return (
    <div>
      <div>关于我们师徒</div>
      {
        STU_DATA.map(stu => <p className='pStyle' key={stu.id} onClick={() => routerPush(stu.id)}>{stu.name}</p>)
      }
      <button onClick={routerPush}>点我一下</button>
    </div>
  )
}
