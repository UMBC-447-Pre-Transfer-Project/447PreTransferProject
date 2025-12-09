import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
import Homepage from './views/Homepage/Homepage'
const StaffLoginPage = lazy(() => import('./views/StaffLoginPage/StaffLoginPage'))
const StaffUserPage = lazy(() => import('./views/StaffUserPage/StaffUserPage'))
const ContactPage = lazy(() => import('./views/ContactPage/ContactPage'))
const StaffLayout = lazy(() => import('./views/StaffLayout'))
const DefaultLayout = lazy(() => import('./views/DefaultLayout'))
const TransferFormPage = lazy(() => import('./views/TransferFormPage/TransferFormPage'))
const FinancialAidPage = lazy(() => import('./views/FinancialAidPage/FinancialAidPage'))
const FourYearPage = lazy(() => import('./views/FourYearPage/FourYearPage'))
const TransferInfoPage = lazy(() => import('./views/TransferInfoPage/TransferInfoPage'))

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