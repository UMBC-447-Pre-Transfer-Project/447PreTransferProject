import { Container, Separator, Stack, Text, List } from "@chakra-ui/react"
import { Link } from "react-router"
import { useState } from "react"

const FourYearPage = () => {
  const [activeMajor, setActiveMajor] = useState(null)

  const majors = [
    {
      id: "cs",
      name: "Computer Science (B.S.) - Tracks: Traditional, Data Science, Cybersecurity, Game Development",
      requirements: [
        "Total credits: 120-121",
        "Year One Fall",
        "CMSC 201(Computer Science I), MATH 151(Calculus I), Foreign Langauge 201, ENGL GEP",
        "Year One Spring",
        "CMSC 201(Computer Science II), MATH 152(Calculus II), CMSC 203(Discrete Structures), AH GEP, SS GEP",
        "Year Two Fall",
        "CMSC 331(Principles of Programming Language), CMSC 341(Data Structures), Science Sequence I(see advisor), SS GEP, Elective",
        "Year Two Spring",
        "CMSC 313(Computer Organization & Assembly Language Programming), MATH 221(Linear Algebra), Science Sequence II(see advisor), Sicence Lab, SS GEP",
        "Year Three Fall",
        "CMSC 304(Social & Ethical Issues in Information Technology, WI), CMSC 411(Computer Architecture), CMSC 4XX Elective, STAT 355(Intro. to Stat. and Prob.)",
        "Year Three Spring",
        "CMSC 421(Principles of Operating Systems), CMSC 4XX Elective, CMSC 4XX Elective, AH GEP, C GEP",
        "Year Four Fall",
        "CMSC 441(Design & Analysis of Algorithms), CMSC 447(Software Engineering), Upper-level Elective, Elective, Elective",
        "Year Four Spring",
        "CMSC 4XX Elective, CMSC 4XX Elective, Elective, Elective, Elective",
      ],
    },
    {
      id: "is",
      name: "Information Systems (B.S.)",
      requirements: [
        "Total credits: 119-120",
        "Year One Fall",
        "COMP 101(Computation Thinking & Design), ECON 101(Prin. of Microecon.), MATH 155(Applied Calculus), ENGL GEP",
        "Year One Spring",
        "IS 147(Intro. to Computer Programming), MGMT 210(Practice of Mngt.), ECON 102(Prin. of Macroecon.), AH GEP, S GEP",
        "Year Two Fall",
        "IS 247(Computer Programming II), IS 300(Management Information Systems), ECON 121(Prin. of Accounting), AH GEP, C GEP",
        "Year Two Spring",
        "IS 310(Software and Hardware Concepts), MATH 215(Applied Finite Math.), ECON 122(Prin. of Accounting II), Foreign Language 201, AH GEP",
        "Year Three Fall",
        "IS 410(Intro. to Database Design), IS 450(Data Communications & Networks), S-lab GEP, Elective, Elective",
        "Year Three Spring",
        "IS 420(Database Application Development), IS 451(Design & Management), STAT 351(Applied Stat. for Busi. and Econ.), SS GEP, Upper-level Elective",
        "Year Four Fall",
        "IS 425(Decision Support Systems), Programming Elective, ENGL 393(WI), Upper-level Elective, Elective",
        "Year Four Spring",
        "IS 436(Structured Systems Analysis & Design), IS Upper-level elective, Upper-level elective, Elective",
      ],
    },
    {
      id: "compe",
      name: "Computer Engineering (B.S.) - Tracks: Cybersecurity, Communications, Electronic Systems",
      requirements: [
        "Total credits: 127",
        "Year One Fall",
        "CMSC 201(Computer Science I), MATH 151(Calculus I), PHYS 121(Intro. to Physics I), ENGL GEP",
        "Year One Spring",
        "CMSC 201(Computer Science II), MATH 152(Calculus II), CMPE 212(Principles of Digital Design), ENES 101(Intro. to Eng.)",
        "Year Two Fall",
        "MATH 251(Multivariable Calc.), PHYS 122(Intro to Physics II), CMSC 203(Discrete Structures), AH GEP, SS GEP",
        "Year Two Spring",
        "CMPE 306(Basic Circuit Theory), MATH 225(Intro. to D.E.), CMPE 310(System Design & Programming), CMSC 341(Data Structures)",
        "Year Three Fall",
        "CMPE 313(Principles of Electronic Circuits), CMPE 311(C Programming & Embedded Systems), MATH 221(Linear Algebra), Science Elective, AH GEP",
        "Year Three Spring",
        "CMPE 320(Prob. Stat. & Random Processes), CMSC 421(Principles of Operating Systems), CMPE 316(Programmable Logic Devices), CMPE 349(Intro. to Professional Practice, WI), SS GEP",
        "Year Four Fall",
        "CMPE 413(Principles of VLSI Design), CMSC 411(Computer Architecture), CMPE 450(Capstone I), CMPE Elective List A, AH GEP, SS GEP",
        "Year Four Spring",
        "CMPE 451(Capstone II), CMPE Elective List A, CMPE Elective List A or B, Language 201 GEP, C GEP",
      ],
    },
    {
      id: "meche",
      name: "Mechamical Engineering (B.S.)",
      requirements: [
        "Total credits: 127",
        "Year One Fall",
        "CHEM 101(Prin. of Chem. I), MATH 151(Calculus I), ENES 101(Intro. to Engineering), ENGL GEP, AH GEP",
        "Year One Spring",
        "CHEM 102(Prin. of Chem. II), CHEM 102 Lab, PHYS 121(Intro. to Physics I), MATH 152(Calculus II), ENME 110(Statics)",
        "Year Two Fall",
        "ENME 220(Mechanics of Materials), STAT 355(Intro. to Prob. and Stat.), MATH 251(Multivariable Calc.), PHYS 122(Intro. to Physics II)",
        "Year Two Spring",
        "ENME 221(Dynamics), MATH 225(Intro. to D.E.), ENME 204(Intro. to Engineering Design with CAD), ENME 217(Engineering Thermodynamics), AH GEP",
        "Year Three Fall",
        "CMPE 306, ENME 320(Fluid Mechanics), ENME 303(Computational Methods for Engineers), ENME 301(Structure & Properties of Engineering Materials), SS GEP",
        "Year Three Spring",
        "ENME 304(Machine Design), ENME 321(Transfer Processes), ENME 360(Vibrations), ENME 332L(Solid Mechanics & Materials Lab, WI), Foreign Language 201",
        "Year Four Fall",
        "ENME 403(Automatic Controls), ENME 432L(Fluids/Energy Lab), ENME 4XX Technical Elective, Science/Technical Elective, AH GEP, SS GEP",
        "Year Four Spring",
        "ENME 482L(Vibrations/Controls Lab), ENME 444(Mechanical Engr. Systems Design), ENME 4XX Design Elective, SS GEP, C GEP",
      ],
    },
    {
      id: "cheme",
      name: "Chemical Engeering (B.S.) - Tracks: Traditional, Environmental Engineering and Sustainability, Biotechnology/Bioengineering",
      requirements: [
        "Total credits: 129-130",
        "Year One Fall",
        "CHEM 101(Prin. of Chem. I), MATH 151(Calculus I), ENES 101(Intro. to Engineering), ENGL GEP, AH GEP",
        "Year One Spring",
        "CHEM 102(Prin. of Chem. II), CHEM 102 Lab, PHYS 121(Intro. to Physics I), MATH 152(Calculus II), ENME 110(Statics)",
        "Year Two Fall",
        "ENCH 251(Chemical Engineering Analysis), CHEM 351(Org. Chem.), MATH 251(Multivariable Calc.), PHYS 122(Intro. to Physics II), AH GEP",
        "Year Two Spring",
        "ENCH 225L(Chemical Engineering Problem Solving & Experimental Deign Lab), CHEM 351L, MATH 225(Intro. to D.E.), Advanced Science Elective, AH GEP, SS GEP",
        "Year Three Fall",
        "ENCH 300(Chemical Process Thermodynamics), ENCH 425(Transport I: Fluids), CHEM 301(Physical Chem. I), CHEM 331L, Foreign Language 201",
        "Year Three Spring",
        "ENCH 427 (Transport Processes II: Mass Transfer), ENCH 440(Chemical Engineering Kinetics), ENCH 442(Chemical Engineering Systems Analysis), CHEM 302(Physical Chem. II), SS GEP",
        "Year Four Fall",
        "ENCH 444 (Process Engr. Economics & Design), ENCH 445(Separation Processes), ENCH 437L(Chemical Engineering Lab, WI), ENCH XXX Elective, C GEP",
        "Year Four Spring",
        "ENCH 446(Process Engr. Economics & Design II), ENCH XXX Elective, ENCH XXX Elective, SS GEP",
      ],
    },
    {
      id: "bta",
      name: "Business Technology Administration (B.S.)",
      requirements: [
        "Total credits: 120-121",
        "Year One Fall",
        "IS 125(Info. Systems Logic & Structured Design), ECON 101(Prin. of Microecon.), MATH 155(Applied Calculus), ENGL GEP",
        "Year One Spring",
        "IS 202(Systems Analysis Methods), MGMT 210(The Practice of Management), ECON 102(Prin. of Macroecon.), C GEP, AH GEP",
        "Year Two Fall",
        "IS 295(Intermediate Business Applications), ECON 121(Prin. of Accouting), S non-lab GEP, AH GEP, Elective",
        "Year Two Spring",
        "IS 300(Management Information Systems), IS 320(Advanced Business Applications), ECON 122(Prin. of Accounting II), Foreign Language 201, C GEP",
        "Year Three Fall",
        "IS 303(Fund. of Human Computer Interaction), MGMT Upper-Level Elective, S w/lab GEP, Elective, Elective",
        "Year Three Spring",
        "IS 325(Intro. to Management Science), STAT 351(Applied Stat. for Busi. and Econ.), SS GEP, Upper-Level Elective, Elective",
        "Year Four Fall",
        "IS 350(Business Communications Systems), ENGL 393(Technical Writing, WI), IS Upper-Level Elective, AH GEP, Upper-Level Elective",
        "Year Four Spring",
        "IS 440(Integrating Tech. in Bus. Processes), MGMT 489(Seminar in Mgmt. & Admin.), IS 438(Project Mangagement), Upper-Level Elective, Elective",
      ],
    },
  ]

  const toggleMajor = (id) => {
    setActiveMajor(activeMajor === id ? null : id)
  }

  return (
    <Container>
      <Stack p={2}>
        <Stack width={{ sm: "100%", lg: "60%" }}>
          <Text fontSize={32} as="b">
            Four-Year Degree Plans
          </Text>
          <Separator variant="solid" colorScheme="black" width="100%" />

          <Text>
          The College of Engineering and Information Technology (COEIT) offers bachelor of science programs in engineering, computer science, information systems,
          and a bachelor of arts in business tecnology administration. Computer science, computer science, and chemical engineering each have different tracks a
          student can choose(the 4-year plan shows the traditional track, except computer engeering which shows the electronic systems track). UMBC additionally offers minor programs in computer science, computing, and information systems.
          </Text>

          <Text>
          Students must complete various general education requirements in order to successfully complete their degree. 
          The timeframe that the student started their higher education career will determine which general education package they must follow. These include:
          <br/>
            • Arts and Humanities (AH){<br/>}
            • Social Science (SS){<br/>}
            • Mathematics (M){<br/>}
            • Science (S){<br/>}
            • Science with Lab (L){<br/>}
            • Culture (C){<br/>}
            • Language
          </Text>
          <Text>
          Click any major below to show/hide its 4-year plan.
          </Text>

          <Stack spacing={4} mt={6}>
            {majors.map((major) => (
              <Stack key={major.id} spacing={3}>
                <Text
                  fontSize={24}
                  fontWeight="bold"
                  color="blue.600"
                  cursor="pointer"
                  _hover={{ textDecoration: "underline", color: "blue.800" }}
                  onClick={() => toggleMajor(major.id)}
                >
                  {major.name} {activeMajor === major.id ? "↑" : "↓"}
                </Text>

                {activeMajor === major.id && (
                    <Stack ml={8} spacing={3} pb={6} pl={4}>
                     {major.requirements.map((req, i) => {
                     const isFirst = i === 0
                     const isEvenAfterFirst = i > 0 && i % 2 === 0
                        if (isFirst || isEvenAfterFirst) {
                        return (
                        <List.Root key={i}>
                         <List.Item>{req}</List.Item>
                         </List.Root>
                         )
                        } else {
                        return (
                            <Text key={i} pl={6}>
                              {req}
                             </Text>
                             )
                          }
                       })}
                    <Text fontSize="sm" color="gray.600" mt={4}>
                      Note: This is a sample plan, always consult your academic advisor.
                    </Text>
                  </Stack>
                )}
              </Stack>
            ))}
          </Stack>
          <Text mt={8}>
            For official degree worksheets and sample schedules, visit the UMBC Academic Advising website or contact your department.
          </Text>
        </Stack>
      </Stack>
    </Container>
  )
}

export default FourYearPage