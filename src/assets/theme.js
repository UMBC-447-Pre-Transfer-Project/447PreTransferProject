import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const theme = createSystem(defaultConfig, defineConfig({
  theme: {
    tokens: {
      colors: {
        default: { value: '#FFFFFF' },
        primary: { value : '#FCB415' },
        secondary: { value: '#0097B2' },
        header: { value: '#000000' }
      },
      fonts: {
          heading: { value: 'inter' }
      },
      fontWeights: {
        heading: { value: 600 }
      }
    },
  },
}))

export default theme