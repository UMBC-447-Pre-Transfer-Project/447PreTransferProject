import { Box, Button, Input, InputGroup, Stack, Table, Text, NativeSelect } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci"
import { useState } from "react"

const StaffUserPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterMajor, setFilterMajor] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [filterCredits, setFilterCredits] = useState("")
  
  // PLACEHOLDER STUDENT DATA
  const studentData = [
    { id: 1, firstName: "Alice", lastName: "Johnson", studentId: "AL123456", major: "Computer Science", creditsCompleted: 45, status: "Committed" },
    { id: 2, firstName: "Bob", lastName: "Smith", studentId: "BO789012", major: "Mathematics", creditsCompleted: 60, status: "Committed" },
    { id: 3, firstName: "Carol", lastName: "Williams", studentId: "CA345678", major: "Biology", creditsCompleted: 30, status: "Committed" },
    { id: 4, firstName: "David", lastName: "Brown", studentId: "DA901234", major: "Engineering", creditsCompleted: 75, status: "Committed" },
    { id: 5, firstName: "Emma", lastName: "Davis", studentId: "EM567890", major: "Psychology", creditsCompleted: 50, status: "Not Committed" },
    { id: 6, firstName: "Frank", lastName: "Miller", studentId: "FR234567", major: "Business", creditsCompleted: 40, status: "Committed" },
    { id: 7, firstName: "Grace", lastName: "Wilson", studentId: "GR890123", major: "English", creditsCompleted: 55, status: "Not Committed" },
    { id: 8, firstName: "Henry", lastName: "Moore", studentId: "HE456789", major: "Chemistry", creditsCompleted: 65, status: "Committed" },
  ]

  // Get unique values for filters
  const uniqueMajors = [...new Set(studentData.map(s => s.major))].sort()
  const uniqueStatuses = [...new Set(studentData.map(s => s.status))].sort()
  
  // Credit ranges for filter dropdown
  const creditRanges = [30, 40, 60, 75]
  
  // Filter students based on search term and filters
  const filteredStudents = studentData.filter(student => {
    // Search by name (first or last) or student ID
    const matchesSearch = searchTerm === "" || 
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesMajor = filterMajor === "" || student.major === filterMajor
    const matchesStatus = filterStatus === "" || student.status === filterStatus
    const matchesCredits = filterCredits === "" || student.creditsCompleted >= parseInt(filterCredits)
    
    return matchesSearch && matchesMajor && matchesStatus && matchesCredits
  })

  // Export to CSV function
  const handleExport = () => {
    const headers = ['First Name', 'Last Name', 'Student ID', 'Major', 'Credits Completed', 'Status']
    const csvContent = [
      headers.join(','),
      ...filteredStudents.map(student => [
        student.firstName,
        student.lastName,
        student.studentId,
        student.major,
        student.creditsCompleted,
        student.status
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'students.csv'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  return (
    <Stack
      width='100%'
      minHeight='calc(100vh - 96px)'
      bgColor='default'
      p={8}
    >
      <Stack direction='row' justifyContent='space-between' alignItems='center' mb={6}>
        <Text fontSize={48} fontWeight='bold' color='black'>
          Student Directory
        </Text>
        <Button onClick={handleExport} colorScheme='blue'>
          Export to CSV
        </Button>
      </Stack>

      <Stack direction='row' gap={4} mb={4} flexWrap='wrap'>
        <InputGroup startElement={<CiSearch size={20}/>} width='300px'>
          <Input 
            placeholder='Search by name or student ID...' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bgColor='white'
            color='black'
          />
        </InputGroup>
        
        <Box>
          <NativeSelect.Root>
            <NativeSelect.Field 
              value={filterMajor}
              onChange={(e) => setFilterMajor(e.target.value)}
              bgColor='white'
              color='black'
              style={{ color: 'black', backgroundColor: 'white' }}
            >
              <option value="" style={{ backgroundColor: 'white', color: 'black' }}>All Majors</option>
              {uniqueMajors.map(major => (
                <option key={major} value={major} style={{ backgroundColor: 'white', color: 'black' }}>{major}</option>
              ))}
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Box>
        
        <Box>
          <NativeSelect.Root>
            <NativeSelect.Field 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              bgColor='white'
              color='black'
              style={{ color: 'black', backgroundColor: 'white' }}
            >
              <option value="" style={{ backgroundColor: 'white', color: 'black' }}>All Statuses</option>
              {uniqueStatuses.map(status => (
                <option key={status} value={status} style={{ backgroundColor: 'white', color: 'black' }}>{status}</option>
              ))}
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Box>
        
        <Box>
          <NativeSelect.Root>
            <NativeSelect.Field 
              value={filterCredits}
              onChange={(e) => setFilterCredits(e.target.value)}
              bgColor='white'
              color='black'
              style={{ color: 'black', backgroundColor: 'white' }}
            >
              <option value="" style={{ backgroundColor: 'white', color: 'black' }}>All Credits</option>
              {creditRanges.map(credits => (
                <option key={credits} value={credits.toString()} style={{ backgroundColor: 'white', color: 'black' }}>≥{credits} Credits</option>
              ))}
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Box>
        
        <Box flex={1} />
        
        <Button 
          onClick={() => {
            setSearchTerm("")
            setFilterMajor("")
            setFilterStatus("")
            setFilterCredits("")
          }}
          colorScheme='red'
          bgColor='red.500'
          color='white'
        >
          Clear Filters
        </Button>
      </Stack>

      <Box bgColor='white' borderRadius='md' overflow='hidden'>
        <Table.Root variant='outline'>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader color='black' bgColor='primary'>Name</Table.ColumnHeader>
              <Table.ColumnHeader color='black' bgColor='primary'>Student ID</Table.ColumnHeader>
              <Table.ColumnHeader color='black' bgColor='primary'>Major</Table.ColumnHeader>
              <Table.ColumnHeader color='black' bgColor='primary'>Credits Completed</Table.ColumnHeader>
              <Table.ColumnHeader color='black' bgColor='primary'>Status</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filteredStudents.map(student => (
              <Table.Row key={student.id}>
                <Table.Cell color='black'>{student.firstName} {student.lastName}</Table.Cell>
                <Table.Cell color='black'>{student.studentId}</Table.Cell>
                <Table.Cell color='black'>{student.major}</Table.Cell>
                <Table.Cell color='black'>{student.creditsCompleted}</Table.Cell>
                <Table.Cell color='black'>{student.status}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>

      {filteredStudents.length === 0 && (
        <Text textAlign='center' mt={4} color='gray.500'>
          No students found matching your search.
        </Text>
      )}
    </Stack>
  )
}

export default StaffUserPage

