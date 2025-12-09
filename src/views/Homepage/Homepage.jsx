import {
  Button,
  Card,
  Field,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  Link
} from "@chakra-ui/react"
import BannerImage from '../../assets/images/homepage-banner.png'
import { useNavigate } from "react-router"
import { Formik, Form, Field as FormikField } from 'formik'
import TextField from "../../components/InputFields/TextField"
import * as Yup from 'yup'
import { insertStudent } from "../../slices/studentSlice"
import UMBCLogo from '../../assets/images/UMBC-header-logo.svg'

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

  const contactLinks = [
    { text: 'Online Directory', url: 'https://www2.umbc.edu/search/directory/' },
    { text: 'Contact UMBC', url: 'https://umbc.edu/about/contact-us/' },
    { text: 'Get Help', url: 'https://rtforms.umbc.edu/rt_myumbcHelpPage/' }, // Replace with the actual support page URL
  ];

  const resourceLinks = [
    { text: 'Alumni', url: 'https://www.alumni.umbc.edu/s/1325/21/home.aspx'},
    { text: 'Career Center', url: 'https://careers.umbc.edu/'},
    { text: 'Events', url: 'https://my.umbc.edu/events'},
    { text: 'Mobile Apps', url: 'https://umbc.edu/mobile/'},
    { text: 'Stories', url: 'https://umbc.edu/stories/'},
    { text: 'Visit Campus', url: 'https://umbc.edu/about/visit/'},
    { text: 'Work at UMBC', url: 'https://umbc.edu/jobs/'},
  ];

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

      {/*Bottom Header*/}
      <Stack 
        width='100%' 
        minHeight='350px'
        bgColor='black' 
        align="center" 
        py={10} 
        px={{ base: 4, md: 8 }}
      >
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} 
          gap={8}
          width='full'
          maxWidth='1200px' 
          color='white'
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <GridItem>
            <Stack spacing={4} align={{ base: 'center', lg: 'flex-start' }}>
              <Image 
                src={UMBCLogo}
                alt="UMBC Logo" 
                width='120px' 
                height='auto'
                mb={2}
              /> 
              <Text fontSize='sm'>
                University of Maryland, Baltimore County<br/>
                1000 Hilltop Circle, Baltimore, MD 21250
              </Text>
              <Stack direction='row' spacing={3} pt={2}>
                <Link href='https://www.facebook.com/umbcpage'><Text fontSize='xl' color='white'>📘</Text></Link>
                <Link href='https://www.facebook.com/umbcpage'><Text fontSize='xl' color='white'>🐦</Text></Link>
                <Link href='https://www.instagram.com/umbclife/'><Text fontSize='xl' color='white'>📷</Text></Link>
                <Link href='https://www.linkedin.com/school/university-of-maryland-baltimore-county/posts/?feedView=all'><Text fontSize='xl' color='white'>🔗</Text></Link>
                <Link href='https://www.youtube.com/user/UMBCtube'><Text fontSize='xl' color='white'>▶️</Text></Link>
                <Link href='https://my.umbc.edu/'><Text fontSize='sm' fontWeight="bold" color='white' ml={4}>myUMBC</Text></Link>
              </Stack>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack spacing={3} align={{ base: 'center', lg: 'flex-start' }}>
              <Text fontSize='md' fontWeight='bold' mb={2}>Resources</Text>
              {resourceLinks.map(link => (
                <Link key={link.text} href={link.url} fontSize='sm' color='#fdb515' _hover={{ color: '#FFC220' }}>
                  {link.text}
                </Link>
              ))}
            </Stack>
          </GridItem>

          <GridItem>
            <Stack spacing={3} align={{ base: 'center', lg: 'flex-start' }}>
              <Text fontSize='md' fontWeight='bold' mb={2}>Important Contacts</Text>
              {contactLinks.map(link => (
                <Link key={link.text} href={link.url} fontSize='sm' color='#fdb515' _hover={{ color: '#FFC220' }}>
                  {link.text}
                </Link>
              ))}
              
              <Text fontSize='md' fontWeight='bold' mt={6} mb={2}>Emergency Info</Text>
              <Text fontSize='sm' color='#fdb515'>
                UMBC Police: 410-455-5555
              </Text>
              <Link href='https://umbc.omnilert.net/subscriber.php' fontSize='sm' color='#fdb515' _hover={{ color: '#FFC220' }}>
                Sign Up for Text Alerts
              </Link>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
      <Stack width='100%' height='20px' bgColor='#444' /> 
    </Stack>
  )
}

export default Homepage