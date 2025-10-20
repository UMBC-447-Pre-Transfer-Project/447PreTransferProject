import { createBrowserRouter } from 'react-router'
import Homepage from './views/Homepage/Homepage'
import StaffLoginPage from './views/StaffLoginPage/StaffLoginPage'
import DefaultLayout from './views/DefaultLayout'

const Router = createBrowserRouter([
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
      }
    ]
  },
  {
    path: '*',
    element: <Homepage/>,
  },
])

export default Router