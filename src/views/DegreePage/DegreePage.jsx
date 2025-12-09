import { Container, Separator, Stack, Text, List } from "@chakra-ui/react"
import { Link } from "react-router"

const DegreePage = () => {
  return (
    <Container>
      <Stack p={2}>
        <Stack width={{ sm: '100%', lg: '60%' }}>
          <Text fontSize={32} as="b">
            Degree Requirements and Policies
          </Text>
          <Separator variant="solid" colorScheme="black" width="100%" />
        
          <Text mt={2}>
          UMBC requires students to satisfy requirements as determined by the state in order to receive a degree. 
          Courses used within the university requirements may be used towards general education requirements 
          and/or academic department requirements for a student's chosen major(s), minor(s), or certificate(s) if applicable.
          </Text>
          <Separator variant="solid" colorScheme="black" width="100%" />
          <Text fontSize={24} as="b" mt={4}>
            Graduation Requirements
          </Text>
          <Text>
          1. MINIMUM ACADEMIC CREDITS: Without exception, students must complete a minimum of 120 academic credits to receive a UMBC degree.
          </Text>
          <Text>
          2. MINIMUM GRADE POINT AVERAGE: Without exception, students must have a minimum cumulative UMBC grade point average (GPA) of 2.0 to receive a UMBC degree.
          </Text>
          <Text>
          3. MINIMUM UPPER LEVEL CREDITS: Without exception, at least 45 of the minimum 120 credits required for graduation must be in UMBC courses numbered at the 300-level or above or their equivalents.
          </Text>
          4. MINIMUM RESIDENT CREDITS: Without exception, students must complete at least 30 credits of course work at UMBC (referred to as resident credit) to receive a UMBC degree.
          <Text>
          <Text>
          5. WRITING INTENSIVE COURSE (WI): Without exception, students must complete one writing intensive course; a designated WI course may count for the major or a general education requirement, or it may be taken as an elective. The WI course must be completed at UMBC.
          </Text>

          </Text>
          <Separator variant="solid" colorScheme="black" width="100%" />
          <Text fontSize={24} as="b" mt={4}>
            Academic Department Requirements
          </Text>
          <Text>
          Each Academic Department determines the curriculum students must follow in order to receive a degree from the University. The degree audit knows which program(s) a student is following and indicates which courses are required. 
          If a student wishes to change the program(s) they are pursuing, they must complete a change of major form in order for that change to be reflected in their degree audit.
          </Text>
          <Separator variant="solid" colorScheme="black" width="100%" />
          <Text fontSize={24} as="b" mt={4}>
            General Education Requirements
          </Text>
        <Text>
        Students must complete various general education requirements in order to successfully complete their degree. Additionally, Students must complete all general education requirements with a grade of "C" or better.
        </Text>
        <Text as='b'>
            Arts and Humanities(AH) - 3 courses
        </Text>
        <Text as='b'>
            English Composition(ENGL 100 or ENGL110) - 1 course
        </Text>
        <Text as='b'>
            Mathematics(MATH) - 1 course within first 30 credits.
        </Text>
        <Text as='b'>
            Social Sciences(SS) - 3 courses
        </Text>
        <Text as='b'>
            Language(GFR) - 1 course, 201 level
        </Text>
        <Text as='b'>
            Sciences(S) - 2 courses
        </Text>
        <Text as='b'>
            Culture(C) - 2 courses
        </Text>

          <Separator my={2} />

          <Text fontSize={24} as="b" mt={4}>
            Grades and Repeat Policies
          </Text>

          <List.Root as="ol" ml={8} styleType="decimal">
            <List.Item>
              Minimum Grade of C required for any course applied towards a bachelor's degree.
            </List.Item>
            <List.Item>
              Gateway courses require a grade of B or better to be considered complete. 
            </List.Item>
            <List.Item>
              Students may attempt major-required courses only twice.
            </List.Item>
            <List.Item>
              Withdrawls(W) count as attempts as do transfer attempts.
            </List.Item>
            <List.Item>
              No thirds attempts are allowed without special permission granted by UMBC. 
            </List.Item>
            <List.Item>
              Students exceeding two attempts in gateway courses for pre-majors will not be considered for full acceptance into the major. 
            </List.Item>
          </List.Root>

          <Separator my={2} />
          <Text fontSize={24} as="b" mt={4}>
            Honors College Certificate Requirements
          </Text>
          <Text>
          The Honors College is an academic home for UMBC students who seek broad intellectual challenges, a comprehensive liberal arts foundation for their chosen field of study, and a community of like-minded and dedicated scholars. 
          The College's program of study combines exclusive, interdisciplinary coursework with flexible elective options that can fulfill departmental and university-level requirements
          The following course and GPA requirements must be met for a student to receive a Certificate of General Honors upon graduation from UMBC.
          </Text>
          <Text>
          - Each year, Honors College students must make satisfactory progress toward fulfilling the requirements of the Certificate to maintain their standing in the College.
          </Text>
          <Text>
          - All courses taken to fulfill the requirements, with the exception of the Applied Learning Experience, must be at least three credits and passed with a grade of A or B.
          </Text>
          <Text>
          - Members of the Honors College must maintain a cumulative 3.25 GPA (assessed annually) until the completion of their degrees.
          </Text>

          <Separator my={2} />
          <Text mt={6}>
            If you have any questions that you'd like to discuss with an admissions counselor, you can schedule an appointment by visiting the following link:
            <br />
            <Link to="https://undergraduate.umbc.edu/counselors/">
            <Text as="span" color="blue.600" fontWeight="bold" textDecoration="underline">
              undergraduate.umbc.edu/counselors/
              </Text>
            </Link>
          </Text>

          <Text mt={4}>
            Our staff is available Monday-Friday 8:30AM-4:30PM. Feel free to contact our office with any questions you might have!
          </Text>
        </Stack>
      </Stack>
    </Container>
  )
}

export default DegreePage