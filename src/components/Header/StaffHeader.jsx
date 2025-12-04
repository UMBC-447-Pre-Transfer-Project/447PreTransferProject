import { Box, Drawer, IconButton, Image, Input, InputGroup, Portal, Stack, Text } from "@chakra-ui/react"
import { Link } from 'react-router'
import { CiMenuBurger, CiSearch } from "react-icons/ci"
import { useState } from "react"
import UMBCLogo from '../../assets/images/UMBC-header-logo.svg'

const Header = ({}) => {
  const [open, setOpen] = useState(false)

  return (
    <Stack p={2} bgColor='header' width='100%' direction='row' alignItems='center'>
      <Stack direction='row' alignItems='center' spaceX={8}>
        <Link to='/'>
            <Image src={UMBCLogo} width='5rem'/>
        </Link>
        <Text fontSize={{ xs: 24, md: 30 }} fontWeight='heading' color='white' width='100%'>
          UMBC Pre-Transfer
        </Text>
      </Stack>
      <Box flex={1}/>
      <Stack direction='row' gap={10}>
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Drawer.Trigger asChild>
            <IconButton justifySelf='flex-end' px={{ xs: 0, lg: 4 }}>
              <CiMenuBurger/>
            </IconButton>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>
                    <Text fontSize={30} textAlign='center'>
                      Menu
                    </Text>
                  </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body
                  alignItems='center'
                  display='flex'
                  flexDirection='column'
                  onClick={() => setOpen(false)}
                >
                  <Stack spaceY={4}>
                    <Box>
                      <Link to='/'>
                        <Text textAlign='center'>Homepage</Text>
                      </Link>
                    </Box>
                    <Box>
                      <Link to='/staff'>
                        <Text textAlign='center'>Student Dashboard</Text>
                      </Link>
                    </Box>
                  </Stack>
                  {/*This is for everything at the bottom*/}
                  <Box flexGrow={1}/>
                  <Box m={4}>
                    <Link to='/login'>
                      <Text textAlign='center'>Staff Login</Text>
                    </Link>
                  </Box>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Stack>
    </Stack>
  )
}

export default Header