import { Box, IconButton, Image, Input, InputGroup, Stack, Text } from "@chakra-ui/react"
import UMBCLogo from '../../assets/images/UMBC-header-logo.svg'
import { CiMenuBurger, CiSearch } from "react-icons/ci";

const Header = ({}) => {
  return (
    <Stack p={2} bgColor='header' width='100%' direction='row' alignItems='center'>
      <Stack direction='row' alignItems='center' spaceX={8}>
        <Image src={UMBCLogo} height='5rem'/>
        <Text fontSize={30} fontWeight='heading' color='white' width='100%'>
          UMBC Pre-Transfer
        </Text>
        <InputGroup startElement={<CiSearch size={20}/>}>
          <Input bgColor='default' placeholder='Search' width='400px'/>
        </InputGroup>
      </Stack>
      <Box flex={1}/>
      <IconButton justifySelf='flex-end'>
        <CiMenuBurger/>
      </IconButton>
    </Stack>
  )
}

export default Header