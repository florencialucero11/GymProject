import { useState, useEffect } from 'react'
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

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() =>
  {
    fetch("/data/data.json")
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

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {

      setCart(cart.map((item) => item.id === product.id 
      ? {...item,
        quantity: item.quantity +1}: item));
      
    }else{
      setCart([...cart, {...product,quantity:1}]);
    }
  };

  const eliminarDelCarrito = (product) => {
  setCart(prevCart => prevCart.filter(item => item.id !== product));
};


  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home eliminarDelCarrito={eliminarDelCarrito} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando}/>} />
        <Route path='/acercade' element={<AcercaDe  eliminarDelCarrito={eliminarDelCarrito} cart={cart} />}/>
        <Route path='/productos' element={<GaleriaProductos eliminarDelCarrito={eliminarDelCarrito} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando}/>}/>
        <Route path='contactos' element={<Contactos eliminarDelCarrito={eliminarDelCarrito} cart={cart}/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </Router>
  )
}

export default App
