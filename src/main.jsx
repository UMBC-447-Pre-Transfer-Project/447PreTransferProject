import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import { RouterProvider } from 'react-router'
import system from './assets/theme'
import Router from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider system={system}>
      <RouterProvider router={Router}/>
    </Provider>
  </StrictMode>,
)
