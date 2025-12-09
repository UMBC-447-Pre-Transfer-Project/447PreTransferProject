import { Stack } from '@chakra-ui/react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'

const DefaultLayout = () => <Stack gap={0}>
    <Header/>
    <Outlet/>
    <Footer/>
  </Stack>

export default DefaultLayout