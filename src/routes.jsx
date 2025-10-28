import { createBrowserRouter } from 'react-router'
import Homepage from './views/Homepage/Homepage'
import StaffLoginPage from './views/StaffLoginPage/StaffLoginPage'
import ContactPage from './views/ContactPage/ContactPage'
import DefaultLayout from './views/DefaultLayout'
import StaffLayout from './views/StaffLayout'
import StaffDashboard from './views/StaffPage/StaffDashboard'

const Router = createBrowserRouter([
  {
    path: '*',
    element: <Homepage/>,
  },
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: 'login',
        element: <StaffLoginPage/>
      },
      {
        path: 'contact',
        element: <ContactPage/>
      }
    ]
  },
  {
    path: '/staff-dashboard',
    element: <StaffLayout/>,
    children: [
      {
        index: true,
        element: <StaffDashboard/>
      }
    ]
  }
])

export default Router