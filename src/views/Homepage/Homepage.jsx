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
} from "@chakra-ui/react"
import BannerImage from '../../assets/images/homepage-banner.png'
import { useState } from "react"
import { useNavigate } from "react-router"

const Homepage = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  })

  const handleStart = () => {
    navigate("/transfer", { state: formData })
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

          <GridItem colSpan={12}>
            <Grid templateColumns='repeat(12, 1fr)' alignItems='center'>
              <GridItem colSpan={8} p={2}>
                <Image src={BannerImage} width='100%' />
              </GridItem>

              <GridItem colSpan={4} p={4}>
                <Card.Root p={6} bgColor='secondary' height='100%'>
                  <Card.Header textAlign="center">
                    <Text fontSize={28} fontWeight={700}>Start Here</Text>
                  </Card.Header>
                  <Card.Body spacing={4}>
                    <Field.Root>
                      <Field.Label>Email</Field.Label>
                      <Input
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder='Enter Email Here'
                        bgColor='white'
                      />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>First Name</Field.Label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        placeholder='First Name'
                        bgColor='white'
                      />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Last Name</Field.Label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        placeholder='Last Name'
                        bgColor='white'
                      />
                    </Field.Root>

                    <Button mt={4} colorScheme="blue" onClick={handleStart}>
                      Start Form
                    </Button>
                  </Card.Body>
                </Card.Root>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Stack>

      <Stack height='400px' width='100%' align="center" justify="center">
        <Text fontSize="2xl">Additional Info</Text>
      </Stack>
    </Stack>
  )
}

export default Homepage