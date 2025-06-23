import {  useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import Home from './pages/pages/Home'
import AcercaDe from './pages/pages/AcercaDe'
import GaleriaProductos from './pages/pages/GaleriaProductos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contactos from './pages/pages/Contactos'
import NotFound from './pages/pages/NotFound'
import DetallesProductos from './components/DetallesProductos'
import Login from './pages/pages/Login'
import Admin from './pages/pages/Admin'
import RutaProtegida from './auth/RutasProtegidas'
import { CartContext } from './context/CartContext'

function App() {

  const {cart, productos, cargando, error, handleAddToCart, eliminarDelCarrito, isAuthenticated} = useContext(CartContext)

  return (
    
      <Routes>

        <Route path='/' element={<Home />} />
        
        <Route path='/acercade' element={<AcercaDe  />}/>
        
        <Route path='/productos' element={<GaleriaProductos />}/>
        
        <Route path='/productos/:id' element={<DetallesProductos productos={productos}/>}/>

        <Route path='contactos' element={<Contactos />}/>
        
        <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /> </RutaProtegida>} />  

        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound/>}/>

      </Routes>
    
  )
}

export default App
