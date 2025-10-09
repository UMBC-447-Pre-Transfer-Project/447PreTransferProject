import { Button, Card, Field, Input, Link, Stack, Text } from "@chakra-ui/react"

const StaffLoginPage = () => {
  const username = ''
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
        height='400px'
        width='400px'
        textAlign='center'
        m={2}
      >
        <Card.Header>
          <Card.Title>
            Sign-up / Sign-in
          </Card.Title>
        </Card.Header>
        <Card.Body alignItems='center' spaceY={4}>
          <Field.Root m={2}>
            <Field.Label>Email/Username</Field.Label>
            <Input />
          </Field.Root>
          <Field.Root m={2}>
            <Field.Label>Password</Field.Label>
            <Input />
          </Field.Root>
          <Button width='5rem'>Sign-in</Button>
        </Card.Body>
        <Card.Footer justifyContent='center'>
          <Stack alignItems='center'>
            <Text fontSize={12}>Don't Have an Account?</Text>
            <Link fontSize={12}>Click Here</Link>
          </Stack>
        </Card.Footer>
      </Card.Root>
    </Stack>
  )
}
export default StaffLoginPage