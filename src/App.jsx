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
import RutasProtegidas from './auth/RutasProtegidas'
import { CartContex } from './context/CartContext'

function App() {

  const {cart, productos, cargando, error, handleAddToCart, eliminarDelCarrito, isAuthenticated} = useContext(CartContex)

  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home eliminarDelCarrito={eliminarDelCarrito} agregarCarrito={handleAddToCart}
         cart={cart} productos={productos} cargando={cargando}/>} />
        
        <Route path='/acercade' element={<AcercaDe  eliminarDelCarrito={eliminarDelCarrito} cart={cart} />}/>
        
        <Route path='/productos' element={<GaleriaProductos eliminarDelCarrito={eliminarDelCarrito} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando}/>}/>
        
        <Route path='/productos/:id' element={<DetallesProductos productos={productos}/>}/>

        <Route path='contactos' element={<Contactos eliminarDelCarrito={eliminarDelCarrito} cart={cart}/>}/>
        
        <Route path='admin' element={<RutasProtegidas isAuthenticated={isAuthenticated}> <Admin /> </RutasProtegidas>} />  

        <Route path='login' element={<Login />} />

        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </Router>
  )
}

export default App
