import { Stack } from '@chakra-ui/react'
import StaffHeader from "../components/Header/StaffHeader"
import { Outlet } from 'react-router'

const StaffLayout = () => <Stack gap={0}>
    <StaffHeader/>
    <Outlet/>
  </Stack>

export default StaffLayout