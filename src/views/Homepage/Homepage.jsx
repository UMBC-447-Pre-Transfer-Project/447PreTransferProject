import {
  Button,
  Card,
  Field,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import BannerImage from '../../assets/images/homepage-banner.png'
import { useNavigate } from "react-router"
import { Formik, Form, Field as FormikField } from 'formik'
import TextField from "../../components/InputFields/TextField"
import * as Yup from 'yup'
import { insertStudent } from "../../slices/studentSlice"

const validationSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required')
})

const Homepage = () => {
  const navigate = useNavigate()

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
  }

  const handleStart = (values) => {
    insertStudent(values)
    navigate("/transfer", { state: values })
  }

  return (
    <Stack width='100%' height='100%' alignItems='center' gap={0}>
      <Stack bgColor='primary' alignItems='center' pt={2}>
        <Text fontWeight={800} pt={2} fontSize={{ xs: 24, md: 30 }} style={{textAlign: 'center'}}>
          Thinking about joining the retriever community?
        </Text>
        <Grid
          templateColumns='repeat(12, 1fr)'
          templateRows='repeat(12, 1fr)'
          mx={4}
          height='700px'
        >
          <GridItem colSpan={12}>
            <Text fontSize={{ xs: 30, md: 40 }} py={4} px={8}>
              Start your journey here by filling out this form to see the best course of action for you!
            </Text>
          </GridItem>
          <GridItem colSpan={12} rowSpan={12} direction={{ xs: 'column', lg: 'row-reverse' }}>
            <Grid templateColumns='repeat(12, 1fr)' alignItems='center' >
              <GridItem display={{ xs: 'none', lg: 'flex' }} colSpan={{ xs: 12, lg: 8 }} p={2}>
                <Image src={BannerImage} width='100%' />
              </GridItem>
              <GridItem colSpan={{ xs: 12, lg: 4 }} p={4}>
                <Card.Root p={6} bgColor='secondary' height='100%'>
                  <Card.Header textAlign="center">
                    <Text fontSize={28} fontWeight={600}>Start Here</Text>
                  </Card.Header>
                  <Card.Body>
                    <Formik
                      validationSchema={validationSchema}
                      onSubmit={(values) => handleStart(values)}
                      initialValues={initialValues}
                    >
                      {({ errors, dirty }) => <Form>
                      <Field.Root p={1} invalid={errors.email && dirty}>
                        <Field.Label>Email</Field.Label>
                        <FormikField
                          component={TextField}
                          name='email'
                          placeholder='Enter Email Here'
                        />
                        <Field.ErrorText>
                          {errors.email}
                        </Field.ErrorText>
                      </Field.Root>
                      <Field.Root p={1} invalid={errors.firstName && dirty}>
                        <Field.Label>First Name</Field.Label>
                        <FormikField
                          component={TextField}
                          name='firstName'
                          label='First Name'
                        />
                        <Field.ErrorText>
                          {errors.firstName}
                        </Field.ErrorText>
                      </Field.Root>
                      <Field.Root p={1} invalid={errors.lastName && dirty}>
                        <Field.Label>Last Name</Field.Label>
                        <FormikField
                          component={TextField}
                          name='lastName'
                          placeholder='Last Name'
                        />
                        <Field.ErrorText>
                          {errors.lastName}
                        </Field.ErrorText>
                      </Field.Root>
                      <Button mt={4} colorScheme="blue" type='submit'>
                        Start Form
                      </Button>
                      </Form>}
                    </Formik>
                  </Card.Body>
                </Card.Root>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Stack>
      <Stack height='400px' width='100%' align="center" m={2} p={2}>
        <Text fontSize="2xl">Additional Info</Text>
      </Stack>
    </Stack>
  )
}

export default Homepage