import { Box, Button, Input, InputGroup, Stack, Table, Text, NativeSelect } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { getAllStudents } from "../../slices/studentSlice"
import { useEffect } from "react"
import { CiSearch } from "react-icons/ci"
import { useState } from "react"

const StaffUserPage = () => {
  const dispatch = useDispatch()
  const students = useSelector(state => state.students.students)
  useEffect(() => {
    dispatch(getAllStudents())
  }, [])
  const initialFilterValues = ({
    searchTerm: '',
    major: '',
    status: '',
    credits: ''
  })
  const [dialogState, setDialogState] = useState(initialFilterValues)


  // Get unique values for filters
  const uniqueMajors = [...new Set(students.map(s => s.major))].sort()
  const uniqueStatuses = [...new Set(students.map(s => s.status))].sort()

  // Credit ranges for filter dropdown
  const creditRanges = [30, 40, 60, 75]

  // Filter students based on search term and filters
  const filteredStudents = students.filter(student => {
    // Search by name (first or last) or student ID
    const matchesSearch = dialogState.searchTerm === "" ||
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesMajor = dialogState.major === "" || student.major === dialogState.major
    const matchesStatus = dialogState.status === "" || student.status === dialogState.status
    const matchesCredits = dialogState.credits === "" || student.creditsCompleted >= parseInt(dialogState.credits)

    return matchesSearch && matchesMajor && matchesStatus && matchesCredits
  })

  // Export to CSV function
  const handleExport = () => {
    const headers = ['First Name', 'Last Name', 'Major', 'Credits Completed', 'Status']
    const csvContent = [
      headers.join(','),
      ...filteredStudents.map(student => [
        student.firstName,
        student.lastName,
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
      </Stack>
      <Stack direction={{ 'xs': 'column', lg: 'row' }} gap={4} mb={4} >
        <InputGroup startElement={<CiSearch size={20}/>} width='300px'>
          <Input
            placeholder='Search by name'
            value={dialogState.searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bgColor='white'
            color='black'
          />
        </InputGroup>
        <Box>
          <NativeSelect.Root>
            <NativeSelect.Field
              value={dialogState.major}
              onChange={(e) => setDialogState({ ...dialogState, major: e.target.value })}
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
              value={dialogState.status}
              onChange={(e) => setDialogState({ ...dialogState, status: e.target.value })}
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
              value={dialogState.credits}
              onChange={(e) => setDialogState({ ...dialogState, credits: e.target.value })}
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
        <Box flex={1}/>
        <Stack direction='row'>
          <Button onClick={handleExport} colorScheme='blue'>
            Export to CSV
          </Button>
          <Button
            onClick={() => {
              setDialogState(initialFilterValues)
            }}
            colorScheme='red'
            bgColor='red.500'
            color='white'
          >
            Clear Filters
          </Button>
        </Stack>
      </Stack>

      <Box bgColor='white' borderRadius='md' overflow='hidden'>
        <Table.Root variant='outline'>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader color='black' bgColor='primary'>Name</Table.ColumnHeader>
              <Table.ColumnHeader color='black' bgColor='primary'>Major</Table.ColumnHeader>
              <Table.ColumnHeader color='black' bgColor='primary'>Credits Completed</Table.ColumnHeader>
              <Table.ColumnHeader color='black' bgColor='primary'>Status</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filteredStudents.map(student => (
              <Table.Row key={student.id}>
                <Table.Cell color='black'>{student.firstName} {student.lastName}</Table.Cell>
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

