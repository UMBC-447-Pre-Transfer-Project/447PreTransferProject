import { Box, Button, Card, Field, Image, Input, Stack, Text } from "@chakra-ui/react"
import { PasswordInput } from "../../components/ui/password-input"
import { Link } from 'react-router'
import UMBCLogo from '../../assets/images/UMBC-header-logo.svg'
const StaffLoginPage = () => {
  const defaultValues = ''
  return (
    <Stack
      height='calc(100vh - 96px)'
      width='100%'
      alignItems='center'
      justifyContent='center'
      bgColor='primary'
    >
      <Card.Root
        variant='elevated'
        height='500px'
        width='400px'
        textAlign='center'
        m={2}
      >
        <Card.Header>
          <Box height='45px' width='45px'>
            <Image src={UMBCLogo} width='100%'/>
          </Box>
          <Card.Title>
            Sign-up / Sign-in
          </Card.Title>
        </Card.Header>
        <Card.Body alignItems='center' spaceY={4}>
          <Field.Root m={2}>
            <Field.Label>Email/Username</Field.Label>
            <Input placeholder='Email/Username'/>
          </Field.Root>
          <Field.Root m={2}>
            <Field.Label>Password</Field.Label>
            <PasswordInput placeholder='Password'/>
          </Field.Root>
          <Link to='/'>
            <Button
              onClick
              width='5rem'
            >
              Sign-in
            </Button>
          </Link>
        </Card.Body>
        <Card.Footer justifyContent='center'>
          <Stack alignItems='center'>
            <Text fontSize={12}>Don't Have an Account?</Text>
            <Text fontSize={12}>Click Here</Text>
          </Stack>
        </Card.Footer>
      </Card.Root>
    </Stack>
  )
}
export default StaffLoginPage