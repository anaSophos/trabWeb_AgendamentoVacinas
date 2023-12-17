import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Estilos } from './components/EstiloGlobal/index.jsx'
import { SessaoUsuarioProvider } from "./contexts/SessaoUsuario.jsx"

function App() {

  return (
    <>
    <Estilos/>
    <SessaoUsuarioProvider>
      <RouterProvider router={router} />
    </SessaoUsuarioProvider>
    </>
  )
}

export default App
