import { Box, IconButton, Image, Input, InputGroup, Stack, Text } from "@chakra-ui/react"
import { Link } from 'react-router'
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import UMBCLogo from '../../assets/images/UMBC-header-logo.svg'

const Header = ({}) => {
  return (
    <Stack p={2} bgColor='header' width='100%' direction='row' alignItems='center'>
      <Stack direction='row' alignItems='center' spaceX={8}>
        <Link to='/'>
            <Image src={UMBCLogo} width='5rem'/>
        </Link>
        <Text fontSize={30} fontWeight='heading' color='white' width='100%'>
          UMBC Pre-Transfer
        </Text>
      </Stack>
      <Box flex={1}/>
      <Stack direction='row' gap={10}>
        <InputGroup startElement={<CiSearch size={20}/>} justifySelf='flex-end'>
          <Input bgColor='default' placeholder='Search' width='400px'/>
        </InputGroup>
        <IconButton justifySelf='flex-end' px={4}>
          <CiMenuBurger/>
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default Header