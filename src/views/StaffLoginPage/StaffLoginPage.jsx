import { Box, Button, Card, Field, Image, Stack, Text } from "@chakra-ui/react"
import { PasswordInput } from "../../components/ui/password-input"
import UMBCLogo from '../../assets/images/UMBC-header-logo.svg'
import { login, signup } from "../../slices/loginSlice"
import { useDispatch } from "react-redux"
import { Form, Formik, Field as FormikField } from "formik"
import TextField from '../../components/InputFields/TextField'
import { useCallback, useState } from "react"
import { object, string } from 'yup'

const validationSchema = object({
    username: string().required('Username is required'),
    password: string().required('Password is required')
})

const StaffLoginPage = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState(false)

  const handleSignIn = useCallback((values) =>
    dispatch(login(values))
      .then(res => console.warn(res)),
  [dispatch])

  const handleSignUp = useCallback((values) =>
    dispatch(signup(values))
      .then(res => console.warn(res)),
  [dispatch])

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
            {state ? 'Sign-up' : 'Sign-in'}
          </Card.Title>
        </Card.Header>
        <Card.Body alignItems='center' spaceY={4}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={(values) => {
              if (state) {
                handleSignUp(values)
              } else {
                handleSignIn(values)
              }
            }}
          >
            <Form>
              <Field.Root m={2}>
                <Field.Label>Email/Username</Field.Label>
                <FormikField
                  id='username'
                  name='username'
                  component={TextField}
                />
                <Field.ErrorText>
                  Username is required
                </Field.ErrorText>
              </Field.Root>
              <Field.Root m={2}>
                <Field.Label>Password</Field.Label>
                <FormikField
                  id='password'
                  name='password'
                  component={PasswordInput}
                />
                <Field.ErrorText>
                  Password is required
                </Field.ErrorText>
              </Field.Root>
              <Button
                type='submit'
                width='5rem'
              >
                {state ? 'Sign-up' : 'Sign-in'}
              </Button>
            </Form>
          </Formik>
        </Card.Body>
        <Card.Footer justifyContent='center'>
          <Stack alignItems='center'>
            <Text fontSize={12}>Don't Have an Account?</Text>
            <Text fontSize={12} onClick={() =>
              setState(!state)}
              _hover={{ cursor: 'pointer' }}
            >
              Click Here
            </Text>
          </Stack>
        </Card.Footer>
      </Card.Root>
    </Stack>
  )
}
export default StaffLoginPage