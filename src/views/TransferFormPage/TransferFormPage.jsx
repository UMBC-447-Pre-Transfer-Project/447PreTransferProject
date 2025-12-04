import {
    Button,
    Field,
    Input,
    Stack,
    Text,
    Textarea,
    RadioGroup,
    HStack,
    Card,
    Box,
  } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { insertStudent } from "../../slices/studentSlice"
import { useNavigate, useLocation, Link } from "react-router"
import { Formik, Form, Field as FormikField } from 'formik'
import TextField from "../../components/InputFields/TextField"
import TextArea from '../../components/InputFields/TextArea'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  highSchoolStatus: Yup.string().required('High School status is required'),
  mainCampus: Yup.boolean().required('Preferred campus is required'),
  currentInstitution: Yup.string().notRequired(),
  currentMajor: Yup.string().notRequired(),
  completedCredits: Yup.string().notRequired(),
  intendedMajor: Yup.string().notRequired(),
  intendedSemester: Yup.string().notRequired(),
  meetingGoals: Yup.string().notRequired().max(200),
})

const TransferFormPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  // Pre-fill email/first/last from homepage

  const initialValues = {
    email: location.state.email ?? "",
    firstName: location.state.firstName ?? "",
    lastName: location.state.lastName ?? "",
    highSchoolStatus: "",
    mainCampus: "",
    currentInstitution: "",
    currentMajor: "",
    completedCredits: "",
    intendedMajor: "",
    intendedSemester: "",
    meetingGoals: "",
  }

  const handleSubmit = (values) => {
    console.warn(values)
    dispatch(insertStudent(values))
    alert("Thank you! Your pre-transfer advising request has been submitted.")
    //navigate("/")
  }
  return (
    <Stack maxW="900px" mx="auto" mt={10} px={4} spacing={8}>
      <Box textAlign="center">
        <Text fontSize="3xl" fontWeight="bold">
          UMBC Pre-Transfer Advising Request
        </Text>
        <Text fontSize="lg" color="gray.600" mt={2}>
          College of Engineering and Information Technology
        </Text>
      </Box>

      <Box bg="primary" p={4} borderRadius="md">
        <Text fontWeight="bold" color="red.700">
          BEFORE YOU BEGIN...
          <br />
          Gather your unofficial materials from your CURRENT institution as well as any PAST institutions.
          These materials include unofficial transcripts for all past instutionals, AP/IB/CLEP scores, and AACRAO evaluations.
          <br />
          Be sure to name your file with your name and current institution(ie JohnSmith_CCBC.pdf). Additionally
          use file type .doc, .docx, .pdf(preferred). Do not upload .html or other web files
          <br />
          <br />
          IMPORTANT: If you have already applied to UMBC, do NOT fill this form.
          Email COEITtransfer@umbc.edu instead.
        </Text>
      </Box>
      <Card.Root p={8} bg="white" shadow="lg">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
          >
            {({ errors, setFieldValue }) => <Form>
              <Stack spacing={6}>
              <Field.Root invalid={errors.email}>
                <Field.Label>Email Address</Field.Label>
                <FormikField
                  component={TextField}
                  name='email'
                  onChange={e => handleChange("email", e.target.value)}
                />
                <Field.ErrorText>
                  {errors.email}
                </Field.ErrorText>
              </Field.Root>
              {/* High School Diploma - Radio Buttons (exactly like your example) */}
              <Field.Root invalid={errors.highSchoolStatus}>
                <Field.Label>Do you have a high school diploma or equivalent?</Field.Label>
                <FormikField
                  component={RadioGroup.Root}
                  name='highSchoolStatus'
                >
                  <Stack spacing={4}>
                    <RadioGroup.Item
                      value="Yes"
                      onClick={(e) => setFieldValue('highSchoolStatus', e.target.value)}
                    >
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>Yes</RadioGroup.ItemText>
                    </RadioGroup.Item>
                    <RadioGroup.Item
                      value="No"
                      onClick={(e) => setFieldValue('highSchoolStatus', e.target.value)}
                    >
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>No</RadioGroup.ItemText>
                    </RadioGroup.Item>
                    <RadioGroup.Item
                      onClick={(e) => setFieldValue('highSchoolStatus', e.target.value)}
                      value="Dual Enrolled"
                    >
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>
                        Dual Enrolled (taking HS & college classes)
                      </RadioGroup.ItemText>
                    </RadioGroup.Item>
                  </Stack>
                </FormikField>
                <Field.ErrorText>
                  {errors.highSchoolStatus}
                </Field.ErrorText>
              </Field.Root>
              {/* Campus Preference - Radio Buttons */}
              <Field.Root invalid={errors.mainCampus}>
                <Field.Label>Campus Preference</Field.Label>
                <FormikField
                  component={RadioGroup.Root}
                  name='mainCampus'
                >
                  <Stack spacing={4}>
                    <RadioGroup.Item
                      value={true}
                      onClick={(e) => setFieldValue('mainCampus', e.target.value)}
                    >
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>UMBC Catonsville</RadioGroup.ItemText>
                    </RadioGroup.Item>
                    <RadioGroup.Item
                      onClick={(e) => setFieldValue('mainCampus', e.target.value)}
                      value={false}
                    >
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>UMBC Shady Grove (only Computer Science & Mechanical Engineering)</RadioGroup.ItemText>
                    </RadioGroup.Item>
                  </Stack>
                </FormikField>
                <Field.ErrorText>
                  {errors.mainCampus}
                </Field.ErrorText>
              </Field.Root>
              {/* Name Fields */}
              <HStack>
                <Field.Root flex={1} invalid={errors.firstName}>
                  <Field.Label>First Name</Field.Label>
                  <FormikField
                    component={TextField}
                    name='firstName'
                  />
                  <Field.ErrorText>
                  {errors.firstName}
                </Field.ErrorText>
                </Field.Root>
                <Field.Root flex={1} invalid={errors.lastName}>
                  <Field.Label>Last Name</Field.Label>
                  <FormikField
                    component={TextField}
                    name='lastName'
                  />
                  <Field.ErrorText>
                  {errors}
                </Field.ErrorText>
                </Field.Root>
              </HStack>
              <Field.Root invalid={errors.currentInstitution}>
                <Field.Label>Previous/Current Institution:</Field.Label>
                <FormikField
                  component={TextField}
                  name='currentInstitution'
                />
                <Field.ErrorText>
                  {errors.currentInstitution}
                </Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.currentMajor}>
                <Field.Label>What is your major at your current/previous institution?</Field.Label>
                <FormikField
                  component={TextField}
                  name='currentMajor'
                />
                <Field.ErrorText>
                  {errors.currentMajor}
                </Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.completedCredits}>
                <Field.Label>At this time, how many credits have you completed?</Field.Label>
                <FormikField
                  component={TextField}
                  name='completedCredits'
                />
                <Field.ErrorText>
                  {errors.completedCredits}
                </Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.intendedMajor}>
                <Field.Label>What major(s) in the College of Engineering and Information Technology are you considering at UMBC?</Field.Label>
                <FormikField
                  component={TextField}
                  name='intendedMajor'
                />
                <Field.ErrorText>
                  {errors.intendedMajor}
                </Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.intendedSemester}>
                <Field.Label>In which semester do you hope to start taking classes at UMBC? (ex. Spring 2025)</Field.Label>
                <FormikField
                  component={TextField}
                  name='intendedSemester'
                />
                <Field.ErrorText>
                  {errors.intendedSemester}
                </Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.meetingGoals}>
                <Field.Label>What are your goals for your Pre-Transfer Advising meeting?</Field.Label>
                <FormikField
                  component={TextArea}
                  name='meetingGoals'
                />
                <Field.ErrorText>
                  {errors.meetingGoals}
                </Field.ErrorText>
              </Field.Root>
              {/*  Upload Warning */}
              <Box bg="red.100" p={6} borderRadius="md">
                <Text fontWeight="bold" fontSize="lg" color="red">: Upload Your Documents</Text>
                <Text fontWeight="bold" color="red.600">
                  Your last name MUST be in every filename!
                </Text>
                <Text mt={3} fontWeight="bold" color="blue.600">
                  <Link to='https://umbc.app.box.com/f/d5f989d5e3de4a089789c21e931ee1fa'>
                    https://umbc.app.box.com/f/d5f989d5e3de4a089789c21e931ee1fa
                  </Link>
                </Text>
                <Text mt={3} fontWeight="bold" color="red.600">
                  DO NOT SKIP THIS STEP
                </Text>
              </Box>
              </Stack>
              {/* Submit Buttons */}
              <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt={4}>
                <Button
                  colorScheme="blue"
                  size="lg"
                  flex={1}
                  type='submit'
                >
                  Submit Form
                </Button>
                <Button variant="outline" size="lg" flex={1} onClick={() => navigate("/")}>
                  Cancel
                </Button>
              </Stack>
            </Form>}
          </Formik>
          {/* Email */}
      </Card.Root>
    </Stack>
  )
}

  export default TransferFormPage