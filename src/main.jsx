import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import { BrowserRouter, RouterProvider } from 'react-router'
import system from './assets/theme'
import Header from './components/Header/Header'
import routes from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider system={system}>
      <Header/>
      <RouterProvider router={routes}/>
    </Provider>
  </StrictMode>,
)
