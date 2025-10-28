import { Button, Card, Checkbox, Field, Grid, GridItem, Image, Input, Stack, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import BannerImage from '../../assets/images/homepage-banner.png'
import { getAllStudents } from '../../slices/studentSlice'
import { useCallback, useEffect, useState } from "react"

const Homepage = () => {
  const dispatch = useDispatch()
  const [showPopup, setShowPopup] = useState(false)
  const test = useSelector(state => state.transferStudent)
  useEffect(() => {
    dispatch(getAllStudents())
  }, [])

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

      {showPopup && (
        <Stack
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bgColor="rgba(0,0,0,0.6)"
          justifyContent="center"
          alignItems="center"
          zIndex={1000} >
          <Stack
            bgColor="white"
            p={8}
            borderRadius="lg"
            boxShadow="2xl"
            width={["90%", "600px"]}
            maxHeight="80vh"
            overflowY="auto"
            spacing={5} >
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Transfer Form
            </Text>
            <Text fontSize="md" color="gray.600" textAlign="center">
              Fill out the details below to help us guide your transition to UMBC!
            </Text>
            <Field.Root>
              <Field.Label>Current Major</Field.Label>
              <Input placeholder="e.g., Computer Science" bgColor="gray.50" border="1px solid #ccc" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Current / Previous College</Field.Label>
              <Input placeholder="e.g., Montgomery College" bgColor="gray.50" border="1px solid #ccc" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Classes Already Taken</Field.Label>
              <Textarea
                placeholder="e.g., Calculus I, Intro to Programming..."
                bgColor="gray.50"
                border="1px solid #ccc"
                rows={3} />
            </Field.Root>
            <Field.Root>
              <Field.Label>Total Credits Completed</Field.Label>
              <Input placeholder="e.g., 45 credits" bgColor="gray.50" border="1px solid #ccc" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Additional Comments</Field.Label>
              <Textarea
                bgColor="gray.50"
                border="1px solid #ccc"
                rows={4} />
            </Field.Root>
            <Stack direction="row" justifyContent="space-between" pt={4}>
              <Button colorScheme="blue" width="48%" onClick={() => setShowPopup(false)}>
                Submit
              </Button>
              <Button variant="outline" width="48%" onClick={() => setShowPopup(false)}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  )
}

export default Homepage