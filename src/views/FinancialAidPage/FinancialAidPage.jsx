import { Container, Separator, Stack, Text, List } from "@chakra-ui/react"
import { Link } from "react-router"

const FinancialAidPage = () => {
  return <Container>
    <Stack p={2}>
      <Stack width={{ sm: '100%', lg: '60%' }}>
        <Text fontSize={32} as='b'>Financial Aid</Text>
        <Separator variant='solid' colorScheme='black' width='100%'/>
        <Text>
          UMBC offers a range of financial aid and payment options so that all students may benefit from a UMBC education.
        </Text>
        <Text>
          Students may apply for need-based financial aid using the Free Application for Federal Student Aid (FAFSA).
          Students may also be considered for general merit scholarships by meeting priority admissions application deadlines.
          For more information, please visit our Financial Aid and Scholarships Website.
        </Text>
        <Text>
          Submit/update your Free Application for Federal Student Aid (FAFSA) online or via the myStudentAid mobile app.
        </Text>
        <Text fontSize={24}>
          MBC Here
        </Text>
        <List.Root ml={8}>
          <List.Item width='fit-content'>
            <Link to='https://scholarships.umbc.edu/freshmen/'>
              Incoming Freshmen Scholarships
            </Link>
          </List.Item>
          <List.Item width='fit-content'>
            <Link to='https://scholarships.umbc.edu/transfers/'>
              Income Transfer Student Scholarships
            </Link>
          </List.Item>
          <List.Item width='fit-content'>
            <Link to='https://scholarships.umbc.edu/retriever/'>
              UMBC Scholarship Retriever
            </Link>
          </List.Item>
          <List.Item width='fit-content'>
            <Link to='https://scholarships.umbc.edu/searching-the-web-2/'>
              Outside Scholarships
            </Link>
          </List.Item>
          <List.Item width='fit-content'>
            <Link to='https://scholarships.umbc.edu/scholarsprograms/'>
              Scholars Programs
            </Link>
          </List.Item>
        </List.Root>
        <Text>
          Our staff is available Monday-Friday 8:30AM-4:30PM. Feel free to contact our office with any questions you
          might have! Be sure to visit the rest of our website for more information that may meet your specific needs.
        </Text>
      </Stack>
      <Stack>
        <Text fontSize={24}> </Text>
      </Stack>
    </Stack>
  </Container>
}
export default FinancialAidPage