import { Card, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react"
import BannerImage from '../../assets/images/homepage-banner.png'

const Homepage = () => {
  return (
    <Stack width='100%' height='100%' alignItems='center' gap={0}>
      <Stack bgColor='primary' alignItems='center'>
        <Text fontWeight={800} pt={2} fontSize={30}>Thinking about joining the retriever community?</Text>
        <Grid
          templateColumns='repeat(12, 1fr)'
          mx={4}
          height='400px'
        >
          <GridItem colSpan={8}>
            <Text>
              This is sample text but I don't want to use lorem ipsum because I would have to look that up to copy paste it
            </Text>
          </GridItem>
          <GridItem colSpan={4}>
            <Card.Root p={2} bgColor='secondary' border='none' width='100%'>
              <Card.Header>
                <Card.Title>Sign up</Card.Title>
                <Card.Description>
                  Fill in the form below to create an account
                </Card.Description>
              </Card.Header>
              <Card.Body>
                <Text>
                  This is sample text that will be replaced later. It needs to be long enough to emulate what it will look like
                </Text>
              </Card.Body>
            </Card.Root>
          </GridItem>
        </Grid>
      </Stack>
      <Image src={BannerImage} width='100%'/>
      <Stack height='400px' width='100%'>
        <Text>Another sample textbox</Text>
      </Stack>
    </Stack>
  )
}

export default Homepage