import {
  Button,
  Card,
  Field,
  Grid,
  GridItem,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  RadioGroup,
  HStack
} from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import BannerImage from '../../assets/images/homepage-banner.png'
import { useCallback, useState } from "react"
import { insertStudent } from "../../slices/studentSlice"

const FormPopup = ({ setShowPopup, dialogState, handleDialogChange, dispatch }) => {
  const submitForm = useCallback((values) => {
    dispatch(insertStudent(values))
    setShowPopup(false)
  })

  return (
    <Stack
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bgColor="rgba(0,0,0,0.6)"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        bgColor="white"
        p={8}
        borderRadius="lg"
        boxShadow="2xl"
        width='600px'
        maxHeight="800px"
        overflowY="auto"
        spacing={4}>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Transfer Form
        </Text>
        <Text fontSize="md" color="gray.600" textAlign="center">
          Fill out the details below to help us guide your transition to UMBC!
        </Text>
        <Field.Root>
          <Field.Label>Current Major</Field.Label>
          <Input
            defaultValue={dialogState.major}
            onChange={(e) => handleDialogChange('major', e.target.value)}
            placeholder="e.g., Computer Science"
            bgColor="gray.50"
            border="1px solid #ccc"
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Current / Previous College</Field.Label>
          <Input
            defaultValue={dialogState.previousCollege}
            onChange={(e) => handleDialogChange('previousCollege', e.target.value)}
            placeholder="e.g., Montgomery College"
            bgColor="gray.50"
            border="1px solid #ccc"
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Classes Already Taken</Field.Label>
          <Textarea
            defaultValue={dialogState.classesTaken}
            onChange={(e) => handleDialogChange('classesTaken', e.target.value)}
            placeholder="e.g., Calculus I, Intro to Programming..."
            bgColor="gray.50"
            border="1px solid #ccc"
            rows={3}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Total Credits Completed</Field.Label>
          <Input
            defaultValue={dialogState.creditsCompleted}
            onChange={(e) => handleDialogChange('creditsCompleted', parseInt(e.target.value))}
            placeholder="e.g., 45 credits"
            bgColor="gray.50"
            border="1px solid #ccc"
          />
        </Field.Root>
        <RadioGroup.Root
          value={dialogState.status}
          onValueChange={(e) => handleDialogChange('status', e.value)}
        >
          <HStack>
            <RadioGroup.Item
              value='Committed'
              p={2}
            >
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>Committed</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item
              value="Not Committed"
              p={2}
            >
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>Not Committed</RadioGroup.ItemText>
            </RadioGroup.Item>
          </HStack>
        </RadioGroup.Root>
        <Field.Root>
          <Field.Label>Additional Comments</Field.Label>
          <Textarea
            defaultValue={dialogState.additionalComments}
            onChange={(e) => handleDialogChange('additionalComments', e.target.value)}
            bgColor="gray.50"
            border="1px solid #ccc"
            rows={4} />
        </Field.Root>
        <Stack direction="row" justifyContent="space-between" pt={4}>
          <Button type="submit" colorScheme="blue" width="48%" onClick={() => submitForm(dialogState)}>
            Submit
          </Button>
          <Button type="button" variant="outline" width="48%" onClick={() => setShowPopup(false)}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

const Homepage = () => {
  const dispatch = useDispatch()
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    major: '',
    previousCollege: '',
    classesTaken: '',
    creditsCompleted: 0,
    additionalComments: '',
    status: 'Committed'
  }

  const [dialogState, setDialogState] = useState(initialValues)

  const handleDialogChange = (key, value) => setDialogState({ ...dialogState, [key]: value })

  const [showPopup, setShowPopup] = useState(false)

  return (
    <Stack width='100%' height='100%' alignItems='center' gap={0}>
      <Stack bgColor='primary' alignItems='center' pt={2}>
        <Text fontWeight={800} pt={2} fontSize={30}>Thinking about joining the retriever community?</Text>
        <Grid
          templateColumns='repeat(12, 1fr)'
          templateRows='repeat(12, 1fr)'
          mx={4}
          height='650px'
        >
          <GridItem colSpan={12}>
            <Text fontSize={40} py={4} px={8}>
              Start your journey here by filling out this form to see the best course of action for you!
            </Text>
          </GridItem>
          <GridItem colSpan={12} direction='row'>
            <Grid
              templateColumns='repeat(12, 1fr)'
              templateRows='repeat(12, auto)'
              alignItems='center'
            >
              <GridItem colSpan={8} p={2}>
                <Image src={BannerImage} width='100%'/>
              </GridItem>
              <GridItem colSpan={4} p={4}>
                <Stack justifyContent='center' spaceY={2}>
                  <Card.Root p={2} bgColor='secondary' border='none' height='100%'>
                    <Card.Header>
                      <Card.Title justifySelf='center'>
                        <Text fontSize={24} fontWeight={700}>Start Here</Text>
                      </Card.Title>
                    </Card.Header>
                    <Card.Body spaceY={4}>
                      <Field.Root >
                        <Field.Label>
                          Email
                        </Field.Label>
                        <Input
                          onChange={(e) => handleDialogChange('email', e.target.value)}
                          placeholder='Enter Email Here'
                          bgColor='white'
                          border={0}
                        />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label>
                          First Name
                        </Field.Label>
                        <Input
                          onChange={(e) => handleDialogChange('firstName', e.target.value)}
                          placeholder='First Name'
                          bgColor='white'
                          border={0}
                        />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label>
                          Last Name
                        </Field.Label>
                        <Input
                          onChange={(e) => handleDialogChange('lastName', e.target.value)}
                          placeholder='Last Name'
                          bgColor='white'
                          border={0}
                        />
                      </Field.Root>
                      <Button
                        width='7rem'
                        onClick={() => setShowPopup(true)}
                      >
                        Start
                      </Button>
                    </Card.Body>
                  </Card.Root>
                </Stack>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Stack>
      <Stack height='400px' width='100%'>
        <Text>Another sample textbox</Text>
      </Stack>

      {showPopup &&
      <FormPopup
        dialogState={dialogState}
        handleDialogChange={handleDialogChange}
        setShowPopup={setShowPopup}
        dispatch={dispatch}
      />}
    </Stack>
  )
}

export default Homepage