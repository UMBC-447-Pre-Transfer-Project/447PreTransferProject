import { createBrowserRouter } from 'react-router'
import Homepage from './views/Homepage/Homepage'
import StaffLoginPage from './views/StaffLoginPage/StaffLoginPage'

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Homepage
  },
  {
    path: '/login',
    Component: StaffLoginPage
  }
])

export default routes