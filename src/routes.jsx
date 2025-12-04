import { createBrowserRouter } from 'react-router'
import Homepage from './views/Homepage/Homepage'
import StaffLoginPage from './views/StaffLoginPage/StaffLoginPage'
import StaffUserPage from './views/StaffUserPage/StaffUserPage'
import ContactPage from './views/ContactPage/ContactPage'
import StaffLayout from './views/StaffLayout'
import DefaultLayout from './views/DefaultLayout'
import TransferFormPage from './views/TransferFormPage/TransferFormPage'
import FinancialAidPage from './views/FinancialAidPage/FinancialAidPage'
import FourYearPage from './views/FourYearPage/FourYearPage'
import TransferInfoPage from './views/TransferInfoPage/TransferInfoPage'

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
      },
      {
        path: 'transfer',
        element: <TransferFormPage/>
      },
      {
        path: 'financial-aid',
        element: <FinancialAidPage/>
      },
      {
        path: 'four-year',
        element: <FourYearPage/>
      },
      {
        path: 'transfer-info',
        element: <TransferInfoPage/>
      }
    ]
  },
  {
    path: '/staff',
    element: <StaffLayout/>,
    children: [
      {
        index: true,
        element: <StaffUserPage/>
      }
    ]
  },
])

export default Router