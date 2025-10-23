import { Button, Card, Field, Grid, GridItem, Image, Input, Stack, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import BannerImage from '../../assets/images/homepage-banner.png'
import { getAllStudents } from '../../slices/transferStudentSlice'
import { useCallback, useEffect } from "react"

const Homepage = () => {
  const dispatch = useDispatch()
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
          height='600px'
        >
          <GridItem colSpan={12}>
            <Text fontSize={40} py={4} px={8}>
              Start your journey here by filling out this form to see the best course of action for you!
            </Text>
          </GridItem>
          <GridItem colSpan={8} p={2}>
            <Image src={BannerImage} width='100%'/>
          </GridItem>
          <GridItem colSpan={4} p={4}>
            <Stack justifyContent='center' spaceY={2}>
              <Card.Root p={2} bgColor='secondary' border='none'>
                <Card.Header>
                  <Card.Title justifySelf='center'>Start Here</Card.Title>
                </Card.Header>
                <Card.Body spaceY={4}>
                  <Field.Root width={60}>
                    <Field.Label>
                      Email
                    </Field.Label>
                    <Input
                      placeholder='Enter Email Here'
                      bgColor='white'
                      border={0}
                    />
                  </Field.Root>
                  <Field.Root width={60}>
                    <Field.Label>
                      First Name
                    </Field.Label>
                    <Input
                      placeholder='First Name'
                      bgColor='white'
                      border={0}
                    />
                  </Field.Root>
                  <Field.Root width={60}>
                    <Field.Label>
                      Last Name
                    </Field.Label>
                    <Input
                      placeholder='Last Name'
                      bgColor='white'
                      border={0}
                    />
                  </Field.Root>
                  <Button width='7rem'>Start</Button>
                </Card.Body>
              </Card.Root>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
      <Stack height='400px' width='100%'>
        <Text>Another sample textbox</Text>
      </Stack>
    </Stack>
  )
}

export default Homepage