import { Stack } from '@chakra-ui/react'
import Header from "../components/Header/Header"
import { Outlet } from 'react-router'

const DefaultLayout = () => <Stack gap={0}>
    <Header/>
    <Outlet/>
  </Stack>

export default DefaultLayout