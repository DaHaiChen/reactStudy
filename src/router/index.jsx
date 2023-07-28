import Home from '../pages/HomePage'
import AuthForm from '../pages/AuthFormPage'
import Profile from '../pages/ProfilePage'

const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/authForm',
    element: <AuthForm />
  },
  {
    path: '/profile',
    element: <Profile />
  }
]

export default router