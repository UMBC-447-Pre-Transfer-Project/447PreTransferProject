import {
  Button,
  Stack,
  IconButton,
  Dialog,
  Portal,
  CloseButton,
  Field,
  Separator,
  RadioGroup,
  Grid,
  GridItem,
  Text
} from "@chakra-ui/react"
import { useState } from "react"
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import { Formik, Form, Field as FormikField } from 'formik'
import * as Yup from 'yup'
import TextField from "../../components/InputFields/TextField"
import TextArea from '../../components/InputFields/TextArea'
import { insertStudent, deleteStudent } from "../../slices/studentSlice"
import { useDispatch } from "react-redux"

const validationSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  highSchoolStatus: Yup.string().required('High School status is required'),
  mainCampus: Yup.boolean().required('Preferred campus is required'),
  currentInstitution: Yup.string().notRequired(),
  currentMajor: Yup.string().notRequired(),
  creditsCompleted: Yup.string().notRequired(),
  intendedMajor: Yup.string().notRequired(),
  intendedSemester: Yup.string().notRequired(),
  meetingGoals: Yup.string().notRequired().max(200),
})

const StudentActions = ({ student }) => {
  const dispatch = useDispatch()

  const initialValues = {
    email: student.email ?? "",
    firstName: student.firstName ?? "",
    lastName: student.lastName ?? "",
    highSchoolStatus: student.highSchoolStatus ?? "",
    mainCampus: student.mainCampus ?? "",
    currentInstitution: student.currentInstitution ?? "",
    currentMajor: student.currentMajor ?? "",
    creditsCompleted: student.creditsCompleted ?? "",
    intendedMajor: student.intendedMajor ?? "",
    intendedSemester: student.intendedSemester ?? "",
    meetingGoals: student.meetingGoals ?? "",
  }
  const [dialogState, setDialogState] = useState({ edit: false, delete: false })
  const handleChange = (state) => setDialogState({...dialogState, ...state})

  const updateStudent = (values) => {
    dispatch(insertStudent({ ...values, id: student.id }))
  }

  const removeStudent = (values) => {
    dispatch(deleteStudent(values))
  }

  return <Stack direction='row'>
  <Dialog.Root
    open={dialogState.edit}
    size='cover'
    scrollBehavior="inside"
    onEscapeKeyDown={() => handleChange({ edit: false })}
    onInteractOutside={() => handleChange({ edit: false })}
  >
    <IconButton
      size='xs'
      onClick={() => handleChange({ edit: true })}
    >
      <FaEdit/>
    </IconButton>
    <Portal>
      <Dialog.Backdrop />
        <Dialog.Positioner>
          <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  handleChange({ edit: false })
                  updateStudent(values)
                }}
              >
                {({ errors, setFieldValue, values }) => <Form>
          <Dialog.Content>
            <Dialog.Header dir='column'>
              <Stack width='100%'>
                <Dialog.Title>{student.firstName} {student.lastName}</Dialog.Title>
                <Separator variant='solid' colorScheme='black' width='100%'/>
              </Stack>
            </Dialog.Header>
            <Dialog.Body>
              <Grid
                templateColumns='repeat(12, 1fr)'
                height='100%'
                gap={2}
              >
                <GridItem colSpan={4}>
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
                </GridItem>
                <GridItem colSpan={4}>
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
                </GridItem>
                <GridItem colSpan={4}>
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
                </GridItem>
                <GridItem colSpan={6}>
                  <Field.Root invalid={errors.highSchoolStatus}>
                    <Field.Label>High School Status</Field.Label>
                    <FormikField
                      component={RadioGroup.Root}
                      name='highSchoolStatus'
                      value={values.highSchoolStatus}
                      onChange={(e) => setFieldValue('highSchoolStatus', e.target.value)}
                    >
                      <Stack spacing={4}>
                        <RadioGroup.Item
                          value="Yes"
                        >
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>Yes</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item
                          value="No"
                        >
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>No</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item
                          value="Dual Enrolled"
                        >
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>
                            Dual Enrolled
                          </RadioGroup.ItemText>
                        </RadioGroup.Item>
                      </Stack>
                    </FormikField>
                    <Field.ErrorText>
                      {errors.highSchoolStatus}
                    </Field.ErrorText>
                  </Field.Root>
                </GridItem>
                <GridItem colSpan={6}>
                  <Field.Root invalid={errors.mainCampus}>
                    <Field.Label>Campus Preference</Field.Label>
                    <FormikField
                      component={RadioGroup.Root}
                      name='mainCampus'
                      value={values.mainCampus}
                      onChange={(e) => setFieldValue('mainCampus', e.target.value === 'true')}
                    >
                      <Stack spacing={4}>
                        <RadioGroup.Item
                          value={true}
                        >
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>UMBC Catonsville</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item
                          value={false}
                        >
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>UMBC Shady Grove</RadioGroup.ItemText>
                        </RadioGroup.Item>
                      </Stack>
                    </FormikField>
                    <Field.ErrorText>
                      {errors.mainCampus}
                    </Field.ErrorText>
                  </Field.Root>
                </GridItem>
                <GridItem colSpan={4}>
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
                </GridItem>
                <GridItem colSpan={4}>
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
                </GridItem>
                <GridItem colSpan={4}>
                  <Field.Root invalid={errors.creditsCompleted}>
                    <Field.Label>At this time, how many credits have you completed?</Field.Label>
                    <FormikField
                      component={TextField}
                      name='creditsCompleted'
                    />
                    <Field.ErrorText>
                      {errors.creditsCompleted}
                    </Field.ErrorText>
                  </Field.Root>
                </GridItem>
                <GridItem colSpan={4}>
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
                </GridItem>
                <GridItem colSpan={4}>
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
                </GridItem>
                <GridItem colSpan={4}>
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
                </GridItem>
              </Grid>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => handleChange({ edit: false })}
                >
                  Close
                </Button>
              </Dialog.ActionTrigger>
              <Button type="submit">
                Save
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" onClick={() => handleChange({ edit: false })}/>
            </Dialog.CloseTrigger>
          </Dialog.Content>
          </Form>}
          </Formik>
        </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
  <Dialog.Root
    onEscapeKeyDown={() => handleChange({ delete: false })}
    onInteractOutside={() => handleChange({ delete: false })}
  >
    <Dialog.Trigger asChild>
      <IconButton size='xs'bg='red'>
        <MdDeleteForever onClick={() => handleChange({ delete: true })}/>
      </IconButton>
    </Dialog.Trigger>
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Delete Student</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Text>
              This will permanently delete this transfer student from the database.
              Are you sure you want to continue
            </Text>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.ActionTrigger>
            <Button
              bg='red'
              onClick={() => {
                handleChange({ delete: false })
                removeStudent({ id: student.id })
              }}
            >
              Delete
            </Button>
          </Dialog.Footer>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm"/>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
  </Stack>
}

export default StudentActions