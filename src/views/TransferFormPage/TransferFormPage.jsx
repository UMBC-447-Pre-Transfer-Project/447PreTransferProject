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
  import { useState, useEffect } from "react"
  import { insertStudent } from "../../slices/studentSlice"
  import { useNavigate, useLocation } from "react-router"
  
  const TransferFormPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
  
    // Pre-fill email/first/last from homepage
    useEffect(() => {
      if (location.state) {
        setFormData(prev => ({
          ...prev,
          email: location.state.email || "",
          firstName: location.state.firstName || "",
          lastName: location.state.lastName || "",
        }))
      }
    }, [location.state])
  
    const [formData, setFormData] = useState({
      email: "",
      firstName: "",
      lastName: "",
      highSchoolStatus: "",
      campusPreference: "",
      currentInstitution: "",
      currentMajor: "",
      completedCredits: "",
      intendedMajor: "",
      intendedSemester: "",
      meetingGoals: "",
    })
  
    const handleChange = (key, value) => {
      setFormData(prev => ({ ...prev, [key]: value }))
    }
  
    const handleSubmit = () => {
      dispatch(insertStudent(formData))
      alert("Thank you! Your pre-transfer advising request has been submitted.")
      navigate("/")
    }
  
    return (
      <Stack maxW="900px" mx="auto" mt={10} px={4} spacing={8}>
        <Box textAlign="center">
          <Text fontSize="3xl" fontWeight="bold">
            UMBC Pre-Transfer Advising Request
          </Text>
          <Text fontSize="lg" color="gray.600" mt={2}>
            College of Engineering and Information Technology
          </Text>
        </Box>
  
        <Box bg="yellow.100" p={4} borderRadius="md">
          <Text fontWeight="bold" color="red.600">
            BEFORE YOU BEGIN...
            <br />
            Gather your unofficial materials from your CURRENT institution as well as any PAST institutions.
            These materials include unofficial transcripts for all past instutionals, AP/IB/CLEP scores, and AACRAO evaluations.
            <br />
            Be sure to name your file with your name and current institution(ie JohnSmith_CCBC.pdf). Additionally
            use file type .doc, .docx, .pdf(preferred). Do not upload .html or other web files
            <br />
            <br />
            IMPORTANT: If you have already applied to UMBC, do NOT fill this form.
            Email COEITtransfer@umbc.edu instead.
          </Text>
        </Box>
  
        <Card.Root p={8} bg="gray.600" shadow="lg">
          <Stack spacing={6}>
  
            {/* Email */}
            <Field.Root isRequired>
              <Field.Label>Email Address</Field.Label>
              <Input type="email" value={formData.email} onChange={e => handleChange("email", e.target.value)} />
            </Field.Root>
  
            {/* High School Diploma - Radio Buttons (exactly like your example) */}
            <Field.Root isRequired>
              <Field.Label>Do you have a high school diploma or equivalent?</Field.Label>
              <RadioGroup.Root value={formData.highSchoolStatus} onValueChange={(e) => handleChange("highSchoolStatus", e.value)}>
                <Stack spacing={4}>
                  <RadioGroup.Item value="Yes">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>Yes</RadioGroup.ItemText>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="No">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>No</RadioGroup.ItemText>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="Dual Enrolled">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>Dual Enrolled (taking HS & college classes)</RadioGroup.ItemText>
                  </RadioGroup.Item>
                </Stack>
              </RadioGroup.Root>
            </Field.Root>
  
            {/* Campus Preference - Radio Buttons */}
            <Field.Root isRequired>
              <Field.Label>Campus Preference</Field.Label>
              <RadioGroup.Root value={formData.campusPreference} onValueChange={(e) => handleChange("campusPreference", e.value)}>
                <Stack spacing={4}>
                  <RadioGroup.Item value="Catonsville">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>UMBC Catonsville</RadioGroup.ItemText>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="Shady Grove">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>UMBC Shady Grove (only Computer Science & Mechanical Engineering)</RadioGroup.ItemText>
                  </RadioGroup.Item>
                </Stack>
              </RadioGroup.Root>
            </Field.Root>
  
            {/* Name Fields */}
            <HStack>
              <Field.Root isRequired flex={1}>
                <Field.Label>First Name</Field.Label>
                <Input value={formData.firstName} onChange={e => handleChange("firstName", e.target.value)} />
              </Field.Root>
              <Field.Root isRequired flex={1}>
                <Field.Label>Last Name</Field.Label>
                <Input value={formData.lastName} onChange={e => handleChange("lastName", e.target.value)} />
              </Field.Root>
            </HStack>
  
            <Field.Root isRequired>
              <Field.Label>Previous/Current Institution:</Field.Label>
              <Input value={formData.currentInstitution} onChange={e => handleChange("currentInstitution", e.target.value)} />
            </Field.Root>
  
            <Field.Root isRequired>
              <Field.Label>What is your major at your current/previous institution?</Field.Label>
              <Input value={formData.currentMajor} onChange={e => handleChange("currentMajor", e.target.value)} />
            </Field.Root>
  
            <Field.Root isRequired>
              <Field.Label>At this time, how many credits have you completed?</Field.Label>
              <Input value={formData.completedCredits} onChange={e => handleChange("completedCredits", e.target.value)} />
            </Field.Root>
  
            <Field.Root isRequired>
              <Field.Label>What major(s) in the College of Engineering and Information Technology are you considering at UMBC?</Field.Label>
              <Input value={formData.intendedMajor} onChange={e => handleChange("intendedMajor", e.target.value)} placeholder="e.g., Computer Science" />
            </Field.Root>
  
            <Field.Root isRequired>
              <Field.Label>In which semester do you hope to start taking classes at UMBC? (ex. Spring 2025)</Field.Label>
              <Input value={formData.intendedSemester} onChange={e => handleChange("intendedSemester", e.target.value)} placeholder="e.g., Fall 2026" />
            </Field.Root>
  
            <Field.Root isRequired>
              <Field.Label>What are your goals for your Pre-Transfer Advising meeting?</Field.Label>
              <Textarea rows={6} value={formData.meetingGoals} onChange={e => handleChange("meetingGoals", e.target.value)} />
            </Field.Root>
  
            {/* Required Upload Warning */}
            <Box bg="red.100" p={6} borderRadius="md">
              <Text fontWeight="bold" fontSize="lg" color="red">REQUIRED: Upload Your Documents</Text>
              <Text fontWeight="bold" color="red.600">
                Your last name MUST be in every filename!
              </Text>
              <Text mt={3} fontWeight="bold" color="blue.600">
                https://umbc.app.box.com/f/d5f989d5e3de4a089789c21e931ee1fa
              </Text>
              <Text mt={3} fontWeight="bold" color="red.600">
                DO NOT SKIP THIS STEP
              </Text>
            </Box>
  
            {/* Submit Buttons */}
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt={4}>
              <Button
                colorScheme="blue"
                size="lg"
                flex={1}
                onClick={handleSubmit}
                isDisabled={!formData.highSchoolStatus || !formData.campusPreference}
              >
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