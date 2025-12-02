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
      gradients: {
        loginBG: { value: 'linear(90, #FFDE59, #FF914D)' }
      },
      fonts: {
          heading: { value: 'inter' }
      },
      fontWeights: {
        heading: { value: 600 }
      }
    },
    breakpoints: {
      xs: '200px'
    }
  },
}))

export default theme