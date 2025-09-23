import { Image, Input, InputGroup, Stack, Text } from "@chakra-ui/react"
import UMBCLogo from '../../assets/UMBC-vertical-logo-CMYK.svg'
import { CiSearch } from "react-icons/ci";

const Homepage = ({}) => {
  return (
    <Stack width='100vw'>
      <Stack spaceX={4} p={2} bgColor='header' width='100%' direction='row' alignItems='center'>
        <Image src={UMBCLogo} height='5rem'/>
        <Text width='100%' fontSize={30} fontWeight='heading' color='white'>UMBC Pre-Transfer</Text>
        <InputGroup startElement={<CiSearch size={20}/>}>
          <Input bgColor='default' placeholder='Search' width='100%'/>
        </InputGroup>
      </Stack>
    </Stack>
  )
}

export default Homepage