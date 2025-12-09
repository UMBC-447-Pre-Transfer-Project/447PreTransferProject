import { resourceLinks, contactLinks } from "../../constants/Links"
import { Stack, Grid, GridItem, Link, Image, Text } from "@chakra-ui/react"
import UMBCLogo from '../../assets/images/UMBC-header-logo.svg'
const Footer = () => {
  return <>
  <Stack
    width='100%'
    minHeight='350px'
    bgColor='black'
    align="center"
    py={10}
    px={{ base: 4, md: 8 }}
  >
    <Grid
      templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
      gap={8}
      width='full'
      maxWidth='1200px'
      color='white'
      textAlign={{ base: 'center', lg: 'left' }}
    >
      <GridItem>
        <Stack spacing={4} align={{ base: 'center', lg: 'flex-start' }}>
          <Image
            src={UMBCLogo}
            alt="UMBC Logo"
            width='120px'
            height='auto'
            mb={2}
          />
          <Text fontSize='sm'>
            University of Maryland, Baltimore County<br/>
            1000 Hilltop Circle, Baltimore, MD 21250
          </Text>
          <Stack direction='row' spacing={3} pt={2}>
            <Link href='https://www.facebook.com/umbcpage'><Text fontSize='xl' color='white'>📘</Text></Link>
            <Link href='https://www.facebook.com/umbcpage'><Text fontSize='xl' color='white'>🐦</Text></Link>
            <Link href='https://www.instagram.com/umbclife/'><Text fontSize='xl' color='white'>📷</Text></Link>
            <Link href='https://www.linkedin.com/school/university-of-maryland-baltimore-county/posts/?feedView=all'><Text fontSize='xl' color='white'>🔗</Text></Link>
            <Link href='https://www.youtube.com/user/UMBCtube'><Text fontSize='xl' color='white'>▶️</Text></Link>
            <Link href='https://my.umbc.edu/'><Text fontSize='sm' fontWeight="bold" color='white' ml={4}>myUMBC</Text></Link>
          </Stack>
        </Stack>
      </GridItem>
      <GridItem>
        <Stack spacing={3} align={{ base: 'center', lg: 'flex-start' }}>
          <Text fontSize='md' fontWeight='bold' mb={2}>Resources</Text>
          {resourceLinks.map(link => (
            <Link key={link.text} href={link.url} fontSize='sm' color='#fdb515' _hover={{ color: '#FFC220' }}>
              {link.text}
            </Link>
            ))}
          </Stack>
        </GridItem>
        <GridItem>
          <Stack spacing={3} align={{ base: 'center', lg: 'flex-start' }}>
            <Text fontSize='md' fontWeight='bold' mb={2}>Important Contacts</Text>
            {contactLinks.map(link => (
              <Link key={link.text} href={link.url} fontSize='sm' color='#fdb515' _hover={{ color: '#FFC220' }}>
                {link.text}
              </Link>
            ))}
            <Text fontSize='md' fontWeight='bold' mt={6} mb={2}>Emergency Info</Text>
            <Text fontSize='sm' color='#fdb515'>
              UMBC Police: 410-455-5555
            </Text>
            <Link href='https://umbc.omnilert.net/subscriber.php' fontSize='sm' color='#fdb515' _hover={{ color: '#FFC220' }}>
              Sign Up for Text Alerts
            </Link>
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
    <Stack width='100%' height='20px' bgColor='#444' />
    </>
}

export default Footer