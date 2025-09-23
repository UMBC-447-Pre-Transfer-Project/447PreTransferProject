import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

export function Provider(props) {
  const { system } = props
  return (
    <ChakraProvider value={system ?? defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
