import { createBrowserRouter } from 'react-router'
import Homepage from './views/Homepage/Homepage'
import StaffLoginPage from './views/StaffLoginPage/StaffLoginPage'
import StaffUserPage from './views/StaffUserPage/StaffUserPage'
import ContactPage from './views/ContactPage/ContactPage'
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
      },
      {
        path: 'contact',
        element: <ContactPage/>
      },
      {
        path: 'staff',
        element: <StaffUserPage/>
      }
    ]
  },
  {
    path: '*',
    element: <Homepage/>,
  },
])

export default Router