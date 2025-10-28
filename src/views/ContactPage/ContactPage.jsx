import { Card, Grid, GridItem, Stack, Text } from "@chakra-ui/react"
import { Staff } from "../../constants/Staff"

const ContactPage = () => {
  return (
    <Stack
      width='100%'
      bgColor='default'
      alignItems='center'
      p={8}
    >
      <Text fontSize={48} fontWeight='bold' color='black'>
        Pre-Transfer Staff
      </Text>
      <Grid templateColumns='repeat(2, 1fr)' gap={8} maxWidth='1200px' width='100%'>
        {Staff.map((staff, index) => (
          <GridItem key={index}>
            <Card.Root
              variant='elevated'
              bgColor='primary'
              textAlign='center'
              p={6}
            >
              <Card.Body>
                <Stack spaceY={2}>
                  <Text fontSize={24} fontWeight='bold' color='black'>
                    {staff.name}
                  </Text>
                  <Text fontSize={18} color='black'>
                    {staff.email}
                  </Text>
                </Stack>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  )
}

export default ContactPage

