import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Estilos } from './components/EstiloGlobal/index.jsx'
import { AuthProvider } from "./contexts/AuthContext.jsx"

function App() {

  return (
    <>
    <Estilos/>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </>
  )
}

export default App
