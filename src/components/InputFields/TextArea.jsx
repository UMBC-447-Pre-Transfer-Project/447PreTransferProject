import { Textarea } from '@chakra-ui/react'

const TextField = ({ field }, props) =>
  <Textarea
    bg='white'
    {...field}
    {...props}
  />

export default TextField