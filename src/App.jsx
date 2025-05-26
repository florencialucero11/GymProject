import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/pages/Home'
import AcercaDe from './pages/pages/AcercaDe'
import GaleriaProductos from './pages/pages/GaleriaProductos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contactos from './pages/pages/Contactos'
import NotFound from './pages/pages/NotFound'

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() =>
  {
    fetch("./data/data.json")
    .then(respuesta => respuesta.json())
    .then(datos => 
      setTimeout(() => {
        setProductos(datos)
        setCargando(false);
      }, 2000) // Simula un retraso de 2 segundos para la carga;
    )
    .catch(error => {
      console.log("Error al cargar los productos:", error);
      setCargando(false);
      setError(true);
    })
  }, []);

  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home productos={productos} cargando={cargando}/>} />
        <Route path='/acercade' element={<AcercaDe />}/>
        <Route path='/productos' element={<GaleriaProductos/>}/>
        <Route path='contactos' element={<Contactos/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </Router>
  )
}

export default App
