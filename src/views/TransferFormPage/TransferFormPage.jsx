import {
  Button,
  Field,
  Input,
  Stack,
  Text,
  Textarea,
  RadioGroup,
  HStack,
  Card,
  Box,
} from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { insertStudent } from "../../slices/studentSlice"
import { useNavigate } from "react-router"

const TransferFormPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    major: "",
    previousCollege: "",
    classesTaken: "",
    creditsCompleted: 0,
    status: "Committed",
    additionalComments: "",
  })

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = () => {
    dispatch(insertStudent(formData))
    navigate("/")
  }

  return (
    <Stack maxW="800px" mx="auto" mt={10} px={4} spacing={8}>
      <Box textAlign="center">
        <Text fontSize="3xl" fontWeight="bold">
          Transfer Form
        </Text>
        <Text fontSize="lg" color="gray.600" mt={2}>
          Fill out the details below to help us guide your transition to UMBC!
        </Text>
      </Box>

      <Card.Root p={8} bg="white" shadow="lg">
        <Stack spacing={6}>
          {/* Email, First Name, Last Name – pre-filled from homepage if possible */}
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="your.email@example.com"
            />
          </Field.Root>

          <HStack>
            <Field.Root flex={1}>
              <Field.Label>First Name</Field.Label>
              <Input
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="John"
              />
            </Field.Root>
            <Field.Root flex={1}>
              <Field.Label>Last Name</Field.Label>
              <Input
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                placeholder="Doe"
              />
            </Field.Root>
          </HStack>

          <Field.Root>
            <Field.Label>Current Major</Field.Label>
            <Input
              value={formData.major}
              onChange={(e) => handleChange("major", e.target.value)}
              placeholder="e.g., Computer Science"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Current / Previous College</Field.Label>
            <Input
              value={formData.previousCollege}
              onChange={(e) => handleChange("previousCollege", e.target.value)}
              placeholder="e.g., Montgomery College"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Classes Already Taken</Field.Label>
            <Textarea
              value={formData.classesTaken}
              onChange={(e) => handleChange("classesTaken", e.target.value)}
              placeholder="e.g., Calculus I, Intro to Programming..."
              rows={4}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Total Credits Completed</Field.Label>
            <Input
              type="number"
              value={formData.creditsCompleted}
              onChange={(e) => handleChange("creditsCompleted", parseInt(e.target.value) || 0)}
              placeholder="e.g., 45"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Are you committed to UMBC?</Field.Label>
            <RadioGroup.Root
              value={formData.status}
              onValueChange={(e) => handleChange("status", e.value)}
            >
              <HStack spacing={8}>
                <RadioGroup.Item value="Committed">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>Committed</RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item value="Not Committed">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>Not Committed</RadioGroup.ItemText>
                </RadioGroup.Item>
              </HStack>
            </RadioGroup.Root>
          </Field.Root>

          <Field.Root>
            <Field.Label>Additional Comments</Field.Label>
            <Textarea
              value={formData.additionalComments}
              onChange={(e) => handleChange("additionalComments", e.target.value)}
              rows={4}
            />
          </Field.Root>

          <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt={4}>
            <Button colorScheme="blue" size="lg" flex={1} onClick={handleSubmit}>
              Submit Form
            </Button>
            <Button variant="outline" size="lg" flex={1} onClick={() => navigate("/")}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Card.Root>
    </Stack>
  )
}

export default TransferFormPage