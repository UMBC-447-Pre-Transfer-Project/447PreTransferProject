import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import { Provider as ReduxProvider } from 'react-redux'

export function Provider(props) {
  const { system, store } = props
  return (
    <ReduxProvider store={store ?? null}>
      <ChakraProvider value={system ?? defaultSystem}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </ReduxProvider>
  )
}
