import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import { RouterProvider } from 'react-router'
import system from './assets/theme'
import Router from './routes'
import { store } from './slices'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider system={system} store={store}>
      <RouterProvider router={Router}/>
    </Provider>
  </StrictMode>,
)
