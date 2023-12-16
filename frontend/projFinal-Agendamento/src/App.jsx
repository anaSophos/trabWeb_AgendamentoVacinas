import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Estilos } from './components/EstiloGlobal/index.jsx'

function App() {

  return (
    <>
    <Estilos/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
