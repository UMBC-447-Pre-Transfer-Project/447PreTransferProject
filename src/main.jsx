import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import system from './assets/theme'
import Header from './components/Header/Header'
import Homepage from './views/Homepage/Homepage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider system={system}>
      <Header/>
      <Homepage/>
    </Provider>
  </StrictMode>,
)
