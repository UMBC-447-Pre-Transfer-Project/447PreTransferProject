import { Container, Separator, Stack, Text, List } from "@chakra-ui/react"
import { Link } from "react-router"

const TransferInfoPage = () => {
  return (
    <Container>
      <Stack p={2}>
        <Stack width={{ sm: '100%', lg: '60%' }}>
          <Text fontSize={32} as="b">
            Transfer Admissions Information
          </Text>
          <Separator variant="solid" colorScheme="black" width="100%" />
        
          <Text mt={4}>
            Transfer applicants are considered to be students who have completed a minimum of 24 college-level credits at an institution of higher education after receiving a high school diploma or a GED. Special consideration for students who complete an associate's degree at a Maryland two-year institution will be given. 
          </Text>

          <Separator my={2} />

          <Text fontSize={24} as="b">
            Deadlines for Transfer Students
          </Text>


        <Text as="span" fontWeight="bold">Fall Deadlines</Text>
        <Text>
            Priority Deadline: March 1st
        </Text>
        <Text>
            Regular Deadline: June 1st
        </Text>
        <Text>
            Honor's College (Priority): March 1st
        </Text>
        <Text>
            Honor's College (Regular): June 1st
        </Text>
        <Text>
        <br />
        </Text>
        <Text as="span" fontWeight="bold">Spring Deadlines</Text>
        <Text>
            Priority Deadline: October 15th
        </Text>
        <Text>
            Regular Deadline: December 1st
        </Text>
        <Text>
            Honor's College (Priority): October 15th
        </Text>
        <Text>
            Honor's College (Regular): December 1st
        </Text>

          <Separator my={2} />

          <Text fontSize={24} as="b" mt={6}>
            How to Apply for Transfer Admission
          </Text>

          <List.Root as="ol" ml={8} styleType="decimal">
            <List.Item>
              Complete the Common Application in its entirety - Click the link to take you to Common App:
              <br />
            <Link to="https://apply.transfer.commonapp.org/applicant-ux/#/login">
            <Text as="span" color="blue.600" fontWeight="bold" textDecoration="underline">
                apply.transfer.commonapp.org/applicant-ux/#/login
                </Text>
            </Link>
            </List.Item>
            <List.Item>
              Complete the residency questions - This information is located in the Member Questions section for applicants seeking in-state residency for tuition purposes.
            </List.Item>
            <List.Item>
              Submit the Common Application and $75 non-refundable application fee - Prior to the deadline, make sure that there are green “complete” checkmarks under the application in your “My Colleges” dashboard under UMBC, and click submit. UMBC does not require submissions of an Academic Evaluator, College Report, Secondary School Final Report, or Midterm Report to complete the transfer application.
            </List.Item>
            <List.Item>
              Submit official transcripts - Official transcripts from each college or university you have attended are required as part of your transfer application. It is the applicant's responsibility to request transcripts from each of their prior colleges. The transcript should be sent directly from the institution to UMBC electronically at admissions@umbc.edu or by mail after the application is submitted.
            </List.Item>
          </List.Root>

          <Text mt={2}>
            UMBC is a member of the Common Application. To apply for admission, you must submit the completed Common Application, a $75 application fee, and official transcripts from all previously attended institutions.
          </Text>

          <Text>
            The Admissions Committee evaluates transfer applicants on the basis of their academic record at previous institutions. Cumulative grade point average as calculated by UMBC, academic trends, strength of curriculum, and performance in courses related to the intended area of study are considered. Competitive applicants typically present an overall cumulative grade point average of 3.0 or higher in all college-level coursework. Applicants can expect a decision notification 3-4 weeks from the time a completed application is received by the Office of Undergraduate Admissions.
          </Text>

          <Separator my={2} />

          <Text fontSize={24} as="b" mt={6}>
            Additional Information
          </Text>

          <Text>
            Merit-based scholarship consideration will automatically be given to students who submit a completed application prior to the Priority Deadline.
            Once you have completed your application you will be assigned a student ID number. You can use this information to search for scholarships in Scholarship Retriever.
          </Text>

          <Text>
            Transfer Central can show how courses will transfer in the context of our degree requirements, including your anticipated major(s). You can select up to three majors at a time before entering your coursework.
            Click the link below to take you to Transfer Central:
            <br />
            <Link to="https://umbc.transfer.degree/app/#!/landing/">
            <Text as="span" color="blue.600" fontWeight="bold" textDecoration="underline">
                umbc.transfer.degree/app/#!/landing/
                </Text>
            </Link>
          </Text>
          <Text>
            Community College Partnerships - UMBC has partnered with many Community Colleges to enchance the admission and credit 
            transfer process. Click the link below and choose your community college below to explore opportunities available to you:
            <br />
            <Link to="https://umbc.edu/undergraduate/transfer-students/community-college-partnerships/">
            <Text as="span" color="blue.600" fontWeight="bold" textDecoration="underline">
                umbc.edu/undergraduate/transfer-students/community-college-partnerships/
                </Text>
                </Link>
          </Text>

          <Text fontSize={20} as="b" mt={4}>
            2024 Transfer Class Profile
          </Text>
          <List.Root ml={8}>
            <List.Item>Total Transfer Enrollment: 847</List.Item>
            <List.Item>Average GPA: 3.102</List.Item>
            <List.Item>Sex: 48.4% Women; 51.6% Men</List.Item>
            <List.Item>
              Racial/Ethnic Diversity:
              <List.Root ml={8} mt={1}>
                <List.Item>White: 34.2%</List.Item>
                <List.Item>Asian American: 24.1%</List.Item>
                <List.Item>African American: 14.6%</List.Item>
                <List.Item>Hispanic: 14.3%</List.Item>
                <List.Item>Two or More Races: 5.7%</List.Item>
                <List.Item>International: 4.9%</List.Item>
                <List.Item>Not specified: 1.8%</List.Item>
              </List.Root>
            </List.Item>
          </List.Root>

          <Separator my={2} />
          <Text mt={2}>
            If you have any questions that you'd like to discuss with an admissions counselor, you can schedule an appointment by visiting the following link:
            <br />
            <Link to="https://undergraduate.umbc.edu/counselors/">
            <Text as="span" color="blue.600" fontWeight="bold" textDecoration="underline">
              undergraduate.umbc.edu/counselors/
              </Text>
            </Link>
          </Text>

          <Text mt={8}>
            Our staff is available Monday-Friday 8:30AM-4:30PM. Feel free to contact our office with any questions you might have!
          </Text>
        </Stack>
      </Stack>
    </Container>
  )
}

export default TransferInfoPage